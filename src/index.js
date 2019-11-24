const fs = require('fs');
const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');

const contents = unified()
  .use(markdown)
  .use(html)
  .processSync(fs.readFileSync(`${process.cwd()}/content/home.md`))
  .toString();

console.log(contents);
