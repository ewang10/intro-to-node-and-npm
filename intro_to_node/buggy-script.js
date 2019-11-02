const fs = require('fs');
const path = require('path');

const source = process.argv[2];
const target = process.argv[3];
//console.log("reach1");
// read contents of source
const contentsOfSource = fs.readFileSync(source, 'utf-8');
//console.log("reach2");
// get lines of source into an array, remove empty lines
const linesInSource = contentsOfSource.split('\n').filter(Boolean);
//console.log("reach3");
// make the target dir if it doesn't exist
if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}
//console.log("reach4");
// iterare over the lines
linesInSource.forEach(line => {
  // get the content of the lines, first word is a filename, rest is content
  const [ filename, ...contentArr ] = line.split(' ');
  //console.log("reach5");
  // construct the full path for the file to create
  const newFilePath = path.join(__dirname, target, filename);
  console.log("reach6");
  // write the file and it's contents
  fs.writeFileSync(
    newFilePath,
    contentArr.join(" "),
    { flag: 'w+', encoding: 'utf-8' }
  );
  console.log("reach7");
});