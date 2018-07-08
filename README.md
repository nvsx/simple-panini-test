# simple-panini-test
Panini example for generating static webpages

# Read more about Foundation's Panini at zurb.com
<https://foundation.zurb.com/sites/docs/panini.html>

# How to use thist starter project:
* git clone https://github.com/nvsx/simple-panini-test.git
* cd simple-panini-text
* npm install
* npx http-server htdocs
* open browser, then start the build process
* npx gulp
* reload url, view index page

# What gulp just did:
* take the default layout template from ~~/layouts/default.html
* take the files inside ~~/pages/ and apply the default template
* place the output into ~~/htdocs/
