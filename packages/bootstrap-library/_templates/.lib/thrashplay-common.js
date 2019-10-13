const _ = require('lodash')
const appRoot = require('app-root-path')
const fs = require('fs')
const path = require('path')

const getPackageName = (packageJson) => {
  const nameParts = _.get(packageJson, 'name').split('/')
  return nameParts.length > 1 ? nameParts[1] : nameParts[0]
}

const parsePackageJson = () => {
  try {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json')
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = require(packageJsonPath)
      return {
        packageLicense: _.get(packageJson, 'license'),
        packageName: getPackageName(packageJson),
      }
    }
  } catch (err) {
    console.error('Failed to retrieve package.json contents:', err)
  }
  return {}
}

module.exports = {
  withDefaultArguments: (args) => _.merge({}, args, {
    ...parsePackageJson(),
    createThrashplayLibScriptsDir: path.resolve(appRoot.path, 'node_modules', '@thrashplay/bootstrap-library', 'dist'),
    projectDir: path.resolve(process.cwd()),
    ...args,
  })
}