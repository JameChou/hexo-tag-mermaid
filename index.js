var fs = require("fs"),
path = require("path"),
_ = require("underscore");

var filePath = path.join(__dirname, 'mermaid-template.html');

function mermaid(args, content) {
  var template = fs.readFileSync(filePath).toString();

  return _.template(template)({
    content: content
  });
}

hexo.extend.tag.register('mermaid', mermaid, {
  async: true,
  ends: true
});

var r = /\n*(`{3,}|~{3,}) *(.+)? *\n([\s\S]+?)\s*\1\n*/g

hexo.extend.filter.register('before_post_render', function(data){
    if((matches = r.exec(data.content)) != null) {
        data.raw = data.content = data.content.replace(r, function(match, ticks, lang, code, offset, str) {
            try{
                if (lang.trim() == 'mermaid') {
                    return "\n{% mermaid %}\n" + code + "{% endmermaid %}\n";
                }
                return match;
            }catch(err){
                return match;
            }
        });
    }
    return data;
}, 1);
