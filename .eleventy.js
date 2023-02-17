const eleventyFilter = require('./utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodes = require('./utils/eleventy-shortcodes');
const hljs = require('highlight.js');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (config) {
  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcodes);
  config.addPlugin(eleventyNavigationTree);
  config.setQuietMode(true);

  config.addPassthroughCopy('img');

  config.amendLibrary('md', mdLib => {
    mdLib.set({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre><code class="hljs">' +
                  hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                  '</code></pre>';
          } catch (__) {}
        }

        return '<pre><code class="hljs">' + mdLib.utils.escapeHtml(str) + '</code></pre>';
      }
    })
    .use(markdownItAnchor, {
      permalink:markdownItAnchor.permalink.ariaHidden({
        symbol: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.933,12.072c0.17,-0.481 0.435,-0.936 0.819,-1.32c1.376,-1.376 3.615,-1.376 4.991,0l3.209,3.209c1.376,1.376 1.376,3.615 0,4.991c-1.376,1.376 -3.615,1.376 -4.991,0l-0.979,-0.979c-0.82,0.252 -1.673,0.361 -2.523,0.329l2.076,2.076c2.162,2.162 5.681,2.162 7.843,0c2.162,-2.162 2.162,-5.681 0,-7.843l-3.208,-3.209c-2.162,-2.162 -5.681,-2.162 -7.843,0c-0.371,0.371 -0.674,0.784 -0.917,1.222l1.523,1.524Zm4.134,-0.144c-0.17,0.481 -0.435,0.936 -0.819,1.32c-1.376,1.376 -3.615,1.376 -4.991,0l-3.209,-3.209c-1.376,-1.376 -1.376,-3.615 0,-4.991c1.376,-1.376 3.615,-1.376 4.991,0l0.979,0.979c0.82,-0.252 1.673,-0.361 2.523,-0.329l-2.076,-2.076c-2.162,-2.162 -5.681,-2.162 -7.843,0c-2.162,2.162 -2.162,5.681 0,7.843l3.209,3.209c2.162,2.162 5.681,2.162 7.843,0c0.371,-0.371 0.674,-0.784 0.917,-1.222l-1.524,-1.524Z"/>
        </svg>
        `,
        placement: 'before'
      })
    })
    .use(markdownItAttrs);

    mdLib.renderer.rules.table_open = function() {
      return `<div class="table"><table>`
    }

    mdLib.renderer.rules.table_close = function() {
      return `</table></div>`
    }

    return mdLib;
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}