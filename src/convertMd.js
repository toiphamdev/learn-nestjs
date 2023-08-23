const widdershins = require('widdershins');
const fs = require('fs');
const options = {
  language_tabs: [{ javascript: 'Javascript' }],
};
const fileData = fs.readFileSync('swagger.json', 'utf8');
const swaggerFile = JSON.parse(fileData);
widdershins
  .convert(swaggerFile, options)
  .then((markdownOutput) => {
    // markdownOutput contains the converted markdown
    fs.writeFileSync('myOutput.md', markdownOutput, 'utf8');
  })
  .catch((err) => {
    // handle errors
  });
