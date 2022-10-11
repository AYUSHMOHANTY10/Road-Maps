const markdownIt = require('markdown-it');
const markdownKbd = require('markdown-it-kbd');
const markdownAnchor = require('markdown-it-anchor');
const markdownMark = require('markdown-it-mark');
const markdownClass = require('markdown-it-class');

const markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  // Assigns links to the
  .use(markdownAnchor, {
    level: [1, 2, 3],
  })
  // [[x]] gets rendered as <kbd>x</kbd>
  .use(markdownKbd)
  // ==highlight== this gets translated to <mark>
  .use(markdownMark)
  .use(markdownClass, {
    h1: ['text-5xl', 'font-bold', 'mb-5', 'mt-2'],
    p: ['mb-4'],
  });

module.exports = markdown;