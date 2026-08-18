/* node build-single.js  ->  dist/deck-offline.html (one file, no deps) */
const fs=require('fs'),p=require('path');
let h=fs.readFileSync('index.html','utf8');
const inline=(re,file,tag)=>{h=h.replace(re,()=>tag(fs.readFileSync(file,'utf8')));};
inline(/<link rel="stylesheet" href="vendor\/swagger-ui\.css">/,'vendor/swagger-ui.css',c=>`<style>${c}</style>`);
for(const f of ['mermaid.min.js','js-yaml.min.js','swagger-ui-bundle.js'])
  h=h.replace(new RegExp(`<script src="vendor/${f.replace('.','\\.')}"></script>`),
    ()=>`<script>${fs.readFileSync('vendor/'+f,'utf8')}</script>`);
h=h.replace('<script src="deck.js"></script>',()=>`<script>${fs.readFileSync('deck.js','utf8')}</script>`);
fs.mkdirSync('dist',{recursive:true});
fs.writeFileSync('dist/deck-offline.html',h);
console.log('dist/deck-offline.html', (h.length/1048576).toFixed(1)+' MB');
