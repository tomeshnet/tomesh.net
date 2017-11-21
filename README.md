# tomesh.net

[![Build Status](https://travis-ci.org/tomeshnet/tomesh.net.svg?branch=master)](https://travis-ci.org/tomeshnet/tomesh.net) [![Maintainability](https://api.codeclimate.com/v1/badges/f79aeccd728473735323/maintainability)](https://codeclimate.com/github/tomeshnet/tomesh.net/)

Website for [Toronto Mesh](https://www.tomesh.net/) ([https://www.tomesh.net/](https://www.tomesh.net/)), built with [Jekyll](https://jekyllrb.com/), [Font Awesome](http://fontawesome.io/) icons, and [Skeleton](http://getskeleton.com/) CSS.

Copyright (C) 2017 Toronto Mesh contributors.

All tomesh.net **code** at <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/tomeshnet/tomesh.net/" property="cc:attributionName" rel="cc:attributionURL">github.com/tomeshnet/tomesh.net</a> is licensed under a <a rel="license" href="https://www.gnu.org/licenses/gpl.html">GNU General Public License v3.0</a>, the text of which is included in the repository [here](https://github.com/tomeshnet/tomesh.net/blob/master/LICENSE.md).

<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Tomesh.net website</span> **content and documentation** is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## Getting Involved
We would love involvement from more people!
If you notice any errors or would like to submit changes or add content to our website please see our [Contributing Guidelines](https://github.com/tomeshnet/documents/blob/master/CONTRIBUTING.md).

In addition, you can provide feedback by:
* adding a comment to the [issue tracker](https://github.com/tomeshnet/tomesh.net/issues)
* emailing us at [hello@tomesh.net](mailto:hello@tomesh.net)
* speaking with us on our chat at [`#tomesh:chat.tomesh.net`](https://chat.tomesh.net/#/room/#tomesh:tomesh.net)

## Content

Our website content is primarily written in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and the key pages are:

~~~
Home Page (index.html)
├── About (about.md)
├── Get Involved (get-involved.md)
├── Timeline (timeline.md)
│   └── <each timeline item can be found under _timeline />
├── Events (events.md)
│   └── <each event has its own page under _posts />
├── Contact (contact.md)
└── Code of Conduct (code-of-conduct.md)
~~~

Much of the content does not change, we primarily add new events.

### Events
New events are added as new `.md` files in the [`_posts/`](https://github.com/tomeshnet/tomesh.net/tree/master/_posts) directory using an [event template](https://github.com/tomeshnet/tomesh.net/tree/master/_posts/_event-template.md). We request you copy the template if you are submitting a new event.

### Announcements
Announcements are displayed at the top of each page up until a defined date and should be kept to a short line length. Announcements are added as new `.md` files in the [`_announcements/`](https://github.com/tomeshnet/tomesh.net/tree/master/_announcements) directory.

### Timeline Posts
Timeline posts are displayed in reverse chronological order on the [timeline page](https://tomesh.net/timeline). Timeline posts are added as new `.md` files in the [`_timeline/`](https://github.com/tomeshnet/tomesh.net/tree/master/_timeline) directory.


## Development

### 1. Install Dependencies

Install the Jekyll and Bundler gems:

```bash
$ gem install jekyll bundler
```
**Windows users:** [Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)

Install required gems:

```bash
$ bundle install
```

### 2. Running Locally

```bash
$ bundle exec jekyll serve
```

A development server will run at `http://localhost:4000/`

## Deployment

Commits and merges into `master` will be deployed automatically to the production web server through webhook posts from GitHub.

[jekyll-hook](https://github.com/developmentseed/jekyll-hook) listens for incoming webhook posts from GitHub and runs `jekyll build`.

### Daily Builds

A cron task runs `jekyll build` daily at midnight, Eastern Standard Time. The build task can be found in the [scripts directory](scripts/tomesh-build.sh). The cron task can be edited with `sudo crontab -e`
