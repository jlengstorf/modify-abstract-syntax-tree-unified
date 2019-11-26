const visit = require('unist-util-visit');

module.exports = options => tree => {
  visit(
    tree,
    // only visit p tags that contain an img element
    node =>
      node.tagName === 'p' && node.children.some(n => n.tagName === 'img'),
    node => {
      // find the text node
      const textNode = node.children.find(n => n.type === 'text');

      // if there’s no caption, we don’t need to transform the node
      if (!textNode) return;

      const caption = textNode.value.trim();

      console.log({ caption });

      node.tagName = 'figure';
    }
  );
};
