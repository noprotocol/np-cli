const AWS = require('aws-sdk')
const { AWSS3Config } = require('../../config/aws-s3.config')

exports.listBuckets = async (region = AWSS3Config.region) => {

	AWS.config.update({ region })

	const S3 = new AWS.S3({ apiVersion: AWSS3Config.apiVersion })

	const listBucketsPromise = S3.listBuckets().promise()

	try {
		return await listBucketsPromise.then(data => ({ data: data.Buckets, error: null }))
	} catch (e) {
		throw new Error(e)
	}
}
