const { ServiceModel } = require('../../core/models/service.model')
const { listBuckets } = require('./listBuckets')

exports.S3Service = ServiceModel({
	displayName: 'AWS S3',
	name: 'aws_s3',
	version: 1,
	groups: [ 'aws', 'devops', 'database', 'storage', 's3' ],
	methods: { listBuckets }
})
