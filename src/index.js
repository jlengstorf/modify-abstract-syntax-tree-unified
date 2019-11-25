const fs = require('fs');
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const contents = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(() => tree => console.log(JSON.stringify(tree, null, 2)))
  .use(html)
  .processSync(fs.readFileSync(`${process.cwd()}/content/home.md`))
  .toString();

console.log(contents);
