const fs = require('fs');
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const doc = require('rehype-document');
const html = require('rehype-stringify');

const imgToFigure = require('./img-to-figure');

const contents = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(imgToFigure)
  .use(doc, { title: 'A Transformed Document!' })
  .use(html)
  .processSync(fs.readFileSync(`${process.cwd()}/content/home.md`))
  .toString();

const outputDir = `${process.cwd()}/public`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(`${outputDir}/home.html`, contents);
