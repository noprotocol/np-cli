/**
 * @fileoverview Boilerplate for new commands.
 * Copy the content of this file to your new command file and follow the @todo statements.
 *
 * When writing new, or editing existing, commands, follow the Heroku CLI Style Guide:
 * @docs https://devcenter.heroku.com/articles/cli-style-guide
 */

/**
 * @todo add the correct path to the BaseCommand file (src/BaseCommand)
 */
const { BaseCommand, flags } = require()

/**
 * @todo change 'CommandName' to the name of your command
 */
class CommandName extends BaseCommand {
	/**
	 * @todo add your own flags
	 *
	 * Flags are preferred to args. They involve a bit more typing, but make the use of the CLI clearer.
	 *
	 * Ensure that descriptions are provided for all flags, that the descriptions are in lowercase, that
	 * they are concise (so as to fit on narrow screens), and that they do not end in a period to match
	 * other flag descriptions.
	 *
	 * Flags allow us to provide autocomplete in a much better fashion than args.
	 */
	static flags = {
		name: flags.string({ char: 'n', description: 'name -- example flag' })
	}

	/**
	 * @todo (optional) add variables for your own flags.
	 */
	name = null

	async run() {
		/**
		 * @todo change 'CommandName' to the name of your command
		 */
		const { flags } = this.parse(CommandName)

		/**
		 * @todo (optional) update the value of your flag variables.
		 */
		this.name = flags.name

		/**
		 * @todo remove the line below.
		 */
		this.log(`This is the default command boilerplate.`)

		/**
		 * Try to return relevant values/variables at the end of your command. This way, you allow users to
		 * chain your commands or extend your command by piping the output into their own commands/scripts.
		 */
		return this.name
	}
}

/**
 * @todo add your own description
 * @type {string}
 */
CommandName.description = `
this is a boilerplate for new commands. Copy the content of this 
file to your new command file and follow the @todo statements.     

Topic and command descriptions should be provided for all topics 
and commands. They should fit on 80 character width screens, begin 
with a lowercase character, and should not end in a period
`

/**
 * @todo change 'CommandName' to the name of your command
 */
module.exports = CommandName
