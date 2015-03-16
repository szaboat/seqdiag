var wsd = require('websequencediagrams');
var fs = require('fs');
var args = process.argv.slice(2);
var style = args[0];
var inputFileName = args[1];
var outputFileName = args[2];

fs.readFile(inputFileName, function (err, data) {
  if (err) throw err;
  wsd.diagram(data, style, "png", function(er, buf, typ) {
    if (er) {
      console.error(er);
    } else {
      console.log("Received MIME type:", typ);
      fs.writeFile(outputFileName, buf);
    }
  });
});
