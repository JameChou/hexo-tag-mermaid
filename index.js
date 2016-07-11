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
