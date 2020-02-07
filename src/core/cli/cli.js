/**
 * Cli - base instance of our cli utilities. Mostly an extension of heroku-cli-utils.
 */
const utils = require('../../utils')
const Listr = require('listr')
const inquirer = require('inquirer')

/**
 * Import and extract methods from Heroku Cli. We only use the methods defined in
 * 'herokuCliUtils' (see second @type declaration), the rest we omit.
 * @type {herokuCliUtils}
 * @type action, color, command, confirmApp, console, debug, error, errorHandler,
 * 		 exit, formatDate, got, hush, linewrap, log, open, styledHash,  Spinner,
 * 		 styledHeader, styledJSON, styledNameValues, styledObject, table.
 */
const {
	auth,
	login,
	logout,
	mockConsole,
	preAuth,
	stderr,
	stdout,
	yubikey,
	prompt,
	...herokuCliUtils
} = require('heroku-cli-util')

const Cli = (methods = {}) => ({ ...methods })

const cli = Cli({
	...utils,
	...inquirer,
	...herokuCliUtils,
	taskList: option => {
		return new Listr(option)
	},
	async runTaskList(tasks) {
		const runTasks = new Listr(tasks)

		try {
			return await runTasks.run(tasks).then(res => res)
		} catch (error) {
			this.error(error)
			return error
		}
	},
	styledHeader(title) {
		herokuCliUtils.styledHeader(title + herokuCliUtils.color.dim(' ==='))
	},
	seperatorLine() {
		return new inquirer.Separator().line
	}
})

exports.cli = cli
