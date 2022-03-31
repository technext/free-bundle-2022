const nodeW3CValidator = require('node-w3c-validator');
const validatePath = './public/*.html';
const resultOutput = './reports/result.html';

// validate
nodeW3CValidator(
  validatePath,
  {
    format: 'html',
    skipNonHtml: true,
    verbose: true
  },
  function (err, output) {
    if (err === null) {
      return;
    }
    console.log(err.message);
    nodeW3CValidator.writeFile(resultOutput, output);
  }
);
