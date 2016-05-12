#! /bin/bash
set -e

site="/var/www/tomesh.net/html"
source="/var/www/jekyll-hook/tomeshnet/tomesh.net/master/code"

rm -rf $site
/usr/local/bin/jekyll build -s $source -d $site