/**
 * @fileoverview List all S3 buckets in a region.
 */
const { S3Service } = require('../../services/S3')
const { BaseCommand, flags } = require('../../core/BaseCommand')
const { AWSS3Config } = require('../../config/aws-s3.config')

class ListS3BucketsCommand extends BaseCommand {

	static flags = {
		region: flags.string({
			char: 'r',
			description: 'Name of the region where your new buckets are located',
			default: AWSS3Config.region
		})
	}

	async run() {

		const { flags } = this.parse(ListS3BucketsCommand)

		this.region = flags.region

		// fetch the buckets
		const { data, error } =  await S3Service.listBuckets(this.region)
			.then(result => result)
			.catch(error => this.error(error))

		if (error) {
			return this.error(error)
		}

		return data.map(bucket => this.log(`${bucket.Name}`))
	}
}

ListS3BucketsCommand.description = `
Lists all S3 buckets form a specific region.
`

module.exports = ListS3BucketsCommand
