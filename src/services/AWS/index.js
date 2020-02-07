// const AWS = require('aws-sdk/global')
const AWS = require('aws-sdk')
const { ServiceModel, serviceReturnHandle } = require('../../core/models/service.model')

exports.AwsService = ServiceModel({
	displayName: 'AWS',
	name: 'aws',
	version: 1,
	groups: [ 'aws', 'config' ],
	methods: {

		async init() {

			// load and set the user credentials
			AWS.config.credentials = new AWS.SharedIniFileCredentials({
				profile: process.env.AWS_PROFILE,
				callback: error => {

					// credentials not loaded
					if (error) {

						// tell the user what went wrong and what they can do to fix it
						console.error(`[AwsService][init] error while reading your AWS credentials. Here is the complete error object:`, '\n')
						console.error(error, '\n')
						console.error(`[AwsService][init] take a look at these documents if you're stuck or need help:`)
						console.error(`[AwsService][init] -- getting your credentials: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html`)
						console.error(`[AwsService][init] -- setup your credentials: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html`)

						// stop the program
						process.exit(1)
					}

					return serviceReturnHandle({
						keyId: AWS.config.credentials.accessKeyId,
						secretKey: AWS.config.credentials.secretAccessKey
					})
				}
			})
		}
	}
})
