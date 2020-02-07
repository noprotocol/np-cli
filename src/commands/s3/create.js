const AWS = require('aws-sdk')
const Listr = require('listr')
const inquirer = require('inquirer')
const { Command, flags } = require('@oclif/command')

/**
 * Create a new AWS S3 Bucket.
 * @param {*} argv            	   - command-line output (provided by user)
 * @param {*} 	   argv.config 	   - overwrite the default 'Command' class configuration.
 * @param {String} argv.name 	   - the name of the new S3 bucket.
 * @param {String} argv.region     - the AWS region in where we should create the new bucket
 * 								     default: eu-central-1 (see '../defaults/default-s3-bucket.js'
 * @param {Boolean} argv.no-config - create the bucket without the default NoProtocol configuration.
 *
 * @docs https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
 * @docs https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html
 */
class CreateS3BucketCommand extends Command {
	static flags = {
		name: flags.string({ char: 'n', description: 'name of the new bucket' }),
		region: flags.string({ char: 'r', description: 'name of the region where the new bucket should be created' }),
		'no-config': flags.boolean({ char: 'C', description: 'do not use the default settings while creating the bucket (so you may set it yourself' })
	}

	/**
	 * This makes the parser not fail when it receives invalid arguments,
	 * set it to false if you need to accept variable arguments
	 * @default true
	 * @type {boolean}
	 */
	static strict = false

	/** An array of aliases for this command */
	static aliases = ['newbucket', 'createbucket', 'newS3', 'new']

	/**
	 * Command specific variables.
	 */

	/** Name of the new bucket */
	bucketName = null

	/** Temp default region (will be replaced by a s3 config file. */
	defaultRegion = 'eu-central-1'

	/** Region where the new bucket will be created. */
	region = null

	/** Question to ask the user if he/she did not provide a bucket name with the 'name' flag. */
	bucketNamePrompt = [
		{
			type: 'input',
			name: 'bucketName',
			message: `How do you want to name your new bucket?`
		}
	]

	/** Ask the user to provide a name for the new bucket. */
	async askForBucketName() {
		return await inquirer.prompt(this.bucketNamePrompt).then(answer => answer.bucketName)
	}

	/** The tasks this command will execute. */
	taskList = [
		{
			title: 'Setup',
			task: () => {
				return new Listr(
					[
						{
							title: 'Validating new bucket name',
							task: () => {
								if (!this.bucketName) {
									throw new Error('Please provide a name for your new bucket')
								}
							}
						},
						{
							title: 'Validating AWS Authentication',
							task: () => {
								return new Promise(resolve => setTimeout(() => resolve(), 3000))
								// @todo optional https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
								// if (!this.awsAuthenticated) {
								// 	throw new Error('Please provide your correct AWS credentials')
								// }
							}
						}
					],
					{ concurrent: true }
				)
			}
		},
		{
			title: 'Creating bucket',
			task: () => {
				AWS.config.update({ region: this.region })

				const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

				const bucketParams = {
					Bucket: this.bucketName
				}

				s3.createBucket(bucketParams, (error, data) => {
					if (error) {
						return this.error(error)
					}
					return this.log('Successfully created a new S3 bucket!', data.Location)
				})
			}
		}
	]

	/** Method that runs the tasks defined in this.taskList */
	async runTaskList() {

		const tasks = new Listr(this.taskList)

		try {
			return await tasks.run().catch(error => {
				this.error(error)
			})
		} catch (error) {
			this.error(error)
		}
	}

	async run() {

		const { flags } = this.parse(CreateS3BucketCommand)

		this.region = flags.region || this.defaultRegion

		this.bucketName = flags.name ? flags.name : await this.askForBucketName()

		this.log('Creating a new S3 bucket')

		return await this.runTaskList()
			.then(result => this.log(result))
			.catch(error => {

				this.log('Failed creating a new S3 bucket!')

				this.error(error)
			})
	}
}

/**
 * The tweet-sized description for your class, used in a parent-commands
 * sub-command listing and as the header for the command help
 */
CreateS3BucketCommand.description = `
	Creates a new AWS S3 bucket.
`

module.exports = CreateS3BucketCommand
