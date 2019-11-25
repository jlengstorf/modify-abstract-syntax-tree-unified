const visit = require('unist-util-visit');

module.exports = options => tree => {
  visit(
    tree,
    // only visit p tags that contain an img element
    node =>
      node.tagName === 'p' && node.children.some(n => n.tagName === 'img'),
    node => {
      console.log(node);
    }
  );
};
