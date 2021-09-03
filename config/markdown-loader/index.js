

const markdown = require('markdown-it')({
  preset: 'default',
  html: true,
  wrapper: 'section',
});
module.exports = function(source) {
  markdown.use(md => {
    // const defaultRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      return `<pre>{\`<code class="html">"${md.utils.escapeHtml(
        token.content,
      )}"</code>\`}</pre>`
      // console.log(defaultRender(tokens, idx, options, env, self))
      // console.log(`<pre><code class="html">"${md.utils.escapeHtml(
      //   token.content,
      // )}"</code></pre>`)
      // if (token.info.trim() === 'html') {
      //   return `<code class="html">${md.utils.escapeHtml(
      //     token.content,
      //   )}</code>`;
      // }
      // return defaultRender(tokens, idx, options, env, self);
    };
  });
  let output = markdown.render(source)
  console.log('ex',`export default ()=><div>${output}</div>`)
  return `export default ()=><div>${output}</div>`
}