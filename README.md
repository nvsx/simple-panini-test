# simple-panini-test
Panini example for generating static webpages

## Read more about Foundation's Panini at zurb.com
- <https://foundation.zurb.com/sites/docs/panini.html>
- <https://github.com/foundation/panini>

## How to use thist starter project:
1. git clone https://github.com/nvsx/simple-panini-test.git
2. cd simple-panini-text
3. ```npm install```
4. ```npx gulp```
5. ``` npx http-server htdocs```
6. open browser
7. edit pages in pages dir (modify index.html, create new page etc.)
8. ```npx gulp```
9. reload url, view index page

## What gulp just did:
1. take the default layout template from ~~/layouts/default.html
2. take the files inside ~~/pages/ and apply the default template
3. place the output into ~~/htdocs/

## Next steps
* could be create a 'watch' task to automatically run build process wenn pages are modified etc. (gulp watch)
