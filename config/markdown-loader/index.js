
let hljs = require('highlight.js');
/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
 let renderHighlight = function(str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return '';
  }
  // 插入纯html
  return `<div className="hljs" dangerouslySetInnerHTML={{ __html: \`${hljs.highlight(str,{
    language:lang,
    inllegal:true
  }).value}\` }}></div>`;
};


const markdown = require('markdown-it')({
  preset: 'default',
  html: true,
  highlight: renderHighlight,
  wrapper: 'section',
});
module.exports = function(source) {
  markdown.use(md => {
    const defaultRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      // 自定义fence模块
      return defaultRender(tokens, idx, options, env, self)
    };
  });
  let output = markdown.render(source)
  // console.log('output',`export default ()=><div>${output}</div>`)
  return `export default ()=><div>${output}</div>`
}