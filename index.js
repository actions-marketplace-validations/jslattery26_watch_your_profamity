const core = require('@actions/core')
const fs = require('fs')

try {
  const source = core.getInput('source')
  const find = core.getInput('find')
  const replace = core.getInput('replace')
  const replaceAllInput = core.getInput('replaceAll')
  const replaceAll = replaceAllInput ? replaceAllInput == 'true' : false
  const resultValue = replaceAll
    ? source.replaceAll(find, replace)
    : source.replace(find, replace)
  core.setOutput('value', resultValue)
} catch (error) {
  core.setFailed(error.message)
}
