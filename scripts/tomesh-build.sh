#! /bin/bash
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8

set -e

site="/var/www/tomesh.net/html"
source="/var/www/jekyll-hook/tomeshnet/tomesh.net/master/code"

/usr/bin/jekyll build -s $source -d $site