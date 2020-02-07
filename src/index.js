require('dotenv').config()
const path = require('path')
const { flatten } = require('lodash')

// Project root is the folder above this one, so we need to go one step up (..).
global.__rootDir = path.join(__dirname, '..')

const commandsDir = path.join(__dirname, 'commands')

const requireCommand = f => {
	const c = require(f)
	return c.default ? c.default : c
}

const getCommands = (dir) => {
	const all = fs
		.readdirSync(dir)
		.map(file => path.join(dir, file))

	const commands = all
		.filter(f => path.extname(f) === '.js' && !f.endsWith('.test.js'))
		.map(requireCommand)

	const subs = all
		.filter(f => fs.lstatSync(f).isDirectory())
		.map(getCommands)

	return flatten(commands.concat(flatten(subs)))
}

exports.topics = [
	{ name: 's3', description: 'manage AWS s3 buckets' }
]

exports.commands = getCommands(commandsDir)
