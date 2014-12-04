var wsd = require('websequencediagrams');
var fs = require('fs');
var inputFileName = process.argv.slice(2)[0];
var outputFileName = process.argv.slice(2)[1];

fs.readFile(inputFileName, function (err, data) {
  if (err) throw err;
  wsd.diagram(data, "napkin", "png", function(er, buf, typ) {
    if (er) {
      console.error(er);
    } else {
      console.log("Received MIME type:", typ);
      fs.writeFile(outputFileName, buf);
    }
  });
});
