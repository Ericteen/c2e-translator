const translate = require('./lib/index');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'from_lang',
    message: 'Original Language',
    choices: [
      'EN',
      'zh-CHS',
      'ja',
      'ko',
      'ru',
    ],
    default: () => {
      return 'EN'
    }
  },
  {
    type: 'list',
    name: 'to_lang',
    message: 'tranlate to',
    choices: [
      'EN',
      'zh-CHS',
      'ja',
      'ko',
      'ru',
    ],
    default: () => {
      return 'zh-CHS'
    }
  },
  {
    type: 'input',
    name: 'word',
    message: 'Input the word.'
  }
]

module.exports = function trans() {
  inquirer.prompt(questions).then(answers => {
    translate(query = answers.word, from = answers.from_lang, to = answers.to_lang)
  })
}
