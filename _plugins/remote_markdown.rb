# "THE BEER-WARE LICENSE" (Revision 42):
# <robin.hahling@gw-computing.net> wrote this file. As long as you retain this
# notice you can do whatever you want with this stuff. If we meet some day, and
# you think this stuff is worth it, you can buy me a beer in return.
# Robin Hahling
#
# Modified by Garry Ing <hello@garrying.com>

require 'net/http'

module Jekyll
  # Remotely fetch a markdown file.
  class RemoteMarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super

      text.strip!
      check_protocol(text)
      uri = URI(text)

      check_extension(uri.path)

      res = Net::HTTP.get_response(uri)
      raise 'resource unavailable' unless res.is_a?(Net::HTTPSuccess)

      @content = content_blobber(uri, res).force_encoding('UTF-8')
                                          .sub("\xEF\xBB\xBF", '')
    end

    def render(_context)
      @content
    end

    private

    # Added to substitute out relative references in markdown files
    def content_blobber(uri, res)
      path_reduced = Pathname.new(uri.to_s).parent.to_s

      # Find cases of `](./**)`
      rel_md_path = %r{][(][.]\/.*[)]}

      # Replace raw version with GitHub's rendered version
      if path_reduced.include? 'raw.githubusercontent'
        uri_branch = path_reduced.to_s.split('/')[5]
        path_reduced = path_reduced.sub('raw.githubusercontent', 'github')
                                   .sub("/#{uri_branch}", "/blob/#{uri_branch}")
      end

      # Append file to parent path
      res.body.gsub(rel_md_path) { |s| "](#{path_reduced}/#{s.gsub('](./', '')}" }
    end

    def check_protocol(text)
      error_message = "remote_markdown: invalid URI given #{text}"
      raise error_message unless text =~ URI.regexp(%w[http https ftp ftps])
    end

    def check_extension(path)
      mdexts = %w[.markdown .mkdown .mkdn .mkd .md]
      error_message = "remote_markdown: URI file extension not in #{mdexts}"
      raise error_message unless mdexts.include?(File.extname(path))
    end
  end
end

Liquid::Template.register_tag('remote_markdown', Jekyll::RemoteMarkdownTag)
