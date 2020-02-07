const AWS = require('aws-sdk')
const { BaseCommand, flags } = require('../../core/BaseCommand')

class DeleteS3BucketCommand extends BaseCommand {

	static flags = {
		name: flags.string({ char: 'n', description: 'name of the bucket to delete' })
	}

	/** Name of the bucket that gets deleted */
	bucketName = null

	/** Temp default region (will be replaced by a s3 config file. */
	defaultRegion = 'eu-central-1'

	/** Region where the new bucket will be created. */
	region = null

	async run() {

		const { flags } = this.parse(DeleteS3BucketCommand)

		this.region = flags.region || this.defaultRegion

		this.bucketName = flags.name
			? flags.name
			: this.error('Please provide a bucket name.')

		AWS.config.update({ region: this.region })

		const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

		const bucketParams = { Bucket: this.bucketName }

		s3.deleteBucket(bucketParams, (error, data) => {
			return error
				? this.error(error)
				: this.log(`Successfully deleted the bucket ${this.bucketName}!`, data)
		})
	}
}

DeleteS3BucketCommand.description = `
	Delete a S3 bucket.
`

module.exports = DeleteS3BucketCommand
