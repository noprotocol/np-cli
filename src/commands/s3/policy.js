const AWS = require('aws-sdk')
const { BaseCommand, flags } = require('../../core/BaseCommand')
const { AWSS3Config } = require('../../config/aws-s3.config')

class PolicyCommand extends BaseCommand {

	static flags = {
		name: flags.string({ char: 'n', description: 'name of the bucket' }),
		read: flags.boolean({ char: 'r', description: 'prints the policy of a bucket' })
	}

	defaultRegion = AWSS3Config.region
	region = null
	name = null

	async run() {

		const { flags } = this.parse(PolicyCommand)

		if (!flags.name) {
			this.log('name is required, please provide it (--name=)')
		}

		this.name = flags.name
		this.region = flags.region || this.defaultRegion

		AWS.config.update({ region: this.region })

		const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

		const connectConfig = { Bucket: this.name }

		return s3.getBucketPolicy(connectConfig, (error, data) => {

			if (error) {
				return this.error(error)
			}

			const policy = JSON.parse(data.Policy)

			this.log(`This is the bucket policy of ${this.name}:`)

			this.cli.styledJSON(policy)

			return policy
		})
	}
}

PolicyCommand.description = `List and edit the policy of a S3 bucket.`

module.exports = PolicyCommand
