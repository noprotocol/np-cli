const path = require('path')
const fs = require('fs-extra')
const { cli } = require('./cli/cli')
const { Command, flags } = require('@oclif/command')
const { AwsService } = require('../services/AWS')

class BaseCommand extends Command {

	static flags = {
		verbose: flags.boolean({
			description: `Enable extra logging`
		})
	}

	// Make the cli utilities methods accessible for all child-commands.
	cli = cli

	userConfigPath = path.join(this.config.configDir, 'config.json')

	// Runs each time a command is called before the 'run' hook.
	async init() {

		// parse base command flags; these define the base method functions
		const { flags } = this.parse(BaseCommand)

		// set flags
		this.verbose = flags.verbose

		// try to load user credentials
		await this.loadUserConfig()
	}

	// Handle any error from the command
	async catch(err) {}

	// Called after run and catch regardless of whether or not the command errored
	async finally(err) {}

	/**
	 * User config handle and init hook
	 */
	async loadUserConfig() {
		await AwsService.init()

		// @todo use UserService service model
		// this.userConfig = await fs.readJSON(this.userConfigPath)
	}
}

exports.flags = flags

exports.BaseCommand = BaseCommand
