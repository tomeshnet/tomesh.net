# tomesh.net
Website for Toronto Mesh.

## Getting Involved
We are still in the early stages and would love involvement from more people!
If you notice any errors or would like to submit changes or add content to our website please see our [Contributing Guidelines](https://github.com/tomeshnet/documents/blob/master/CONTRIBUTING.md).

In addition, you can provide feedback by:
* adding a comment to the [issue tracker](https://github.com/tomeshnet/tomeshnet.github.io/issues).
* speaking with us on the `#tomesh` channel in [CivicTechTO](http://civictech.ca/)'s slack ([get an invite](https://civictechto-slack-invite.herokuapp.com/))

## Development

### 1. Install Dependencies

Install the Jekyll gem:

```bash
$ gem install jekyll
```
**Windows users:** [Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)

### 2. Running Locally

```bash
$ jekyll serve
```

A development server will run at `http://localhost:4000/`

## Deployment

Commits and merges into `master` will be deployed automatically to the production web server through webhook posts from GitHub.

[jekyll-hook](https://github.com/developmentseed/jekyll-hook) listens for incoming webhook posts from GitHub and runs `jekyll build`.

### Daily Builds

A cron task runs `jekyll build` daily at midnight. The build task can be found in the [scripts directory](scripts/tomesh-build.sh). The cron task can be edited with `sudo crontab -e`