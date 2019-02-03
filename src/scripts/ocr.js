/* eslint-disable no-console */
// const _ = require('lodash');
const Promise = require('bluebird');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function doit() {
  const command = 'tesseract  ./input.png  ./outputPDF -l eng pdf'
  await exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(`err: ${err}`);
    } else {
      console.log('stdout ***:: ', stdout);
      console.log('stderr ***:: ', stderr);
    }
  });

  return Promise.resolve();
}

Promise.resolve()
  .then(doit)
  .catch(err => console.log(`-E- ${err.stack || err}`))
  .finally(process.exit);
