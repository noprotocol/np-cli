const AWS = require('aws-sdk')
const { BaseCommand, flags } = require('../../core/BaseCommand')

class SetBucketPolicyCommand extends BaseCommand {
	async run() {

		const { flags } = this.parse(SetBucketPolicyCommand)

		// @todo implement: 'Setting a Simple Bucket Policy' from
		// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-bucket-policies.html
		this.log('This command is still a WIP and does nothing (yet).')

		const isWIP = true

		// Disable AWS method if still a WIP.
		if (!isWIP) {
			// Set the region
			AWS.config.update({ region: this.region })

			// Create S3 service object
			const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

			// create selected bucket resource string for bucket policy
			const bucketResource = 'arn:aws:s3:::' + this.name + '/*'

			// Example policy
			const readOnlyAnonUserPolicy = {
				Version: '2012-10-17',
				Statement: [
					{
						Sid: 'AddPerm',
						Effect: 'Allow',
						Principal: '*',
						Action: ['s3:GetObject'],
						Resource: [bucketResource]
					}
				]
			}

			// convert policy JSON into string and assign into params
			const bucketPolicyParams = { Bucket: this.name, Policy: JSON.stringify(readOnlyAnonUserPolicy) }

			// set the new policy on the selected bucket
			s3.putBucketPolicy(bucketPolicyParams, function(err, data) {

				return err
					? console.log('Error', err)
					: console.log('Success', data)
			})
		}
	}
}

module.exports = SetBucketPolicyCommand
