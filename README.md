# simple-panini-test
Panini example for generating static webpages

## Read more about Foundation's Panini at zurb.com
- <https://foundation.zurb.com/sites/docs/panini.html>
- <https://github.com/foundation/panini>

## How to use thist starter project:
1. git clone https://github.com/nvsx/simple-panini-test.git
2. cd simple-panini-text
3. ```npm install``` (install node modules)
4. ``` npx http-server htdocs``` (start server)
5. open browser: http://127.0.0.1:8080 (empty directory)
6. ```npx gulp```
7. review in browser (index.html was created)
8. edit pages in pages dir (modify index.html, create new page etc.)
9. ```npx gulp```
10. reload url, review modified index page

## What gulp just did:
1. take the default layout template from ~~/layouts/default.html
2. take the files inside ~~/pages/ and apply the default template
3. place the output into ~~/htdocs/

## Next steps
* could be create a 'watch' task to automatically run build process wenn pages are modified etc. (gulp watch)
