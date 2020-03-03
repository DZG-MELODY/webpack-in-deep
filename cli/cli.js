const path = require('path');
const fse = require('fs-extra');
const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
const runExample = require('./run');

const examples = fse.readdirSync(path.resolve(__dirname, '..', 'packages')).map(v => v);

function searchExamples(answers, input) {
  input = input || '';
  return new Promise(function (resolve) {
    const filters = examples.filter(v => v.includes(input));
    resolve(
      filters
    );
  });
}

(async function () {
  const select = await inquirer.prompt({
    type: "autocomplete",
    name: "example",
    message: "select which example to run ?",
    source: searchExamples
  })
  runExample(select.example);

}())

