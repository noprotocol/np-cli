/**
 * @fileoverview list the content of a S3 bucket
 */
const AWS = require('aws-sdk')
const { BaseCommand, flags } = require('../../core/BaseCommand')
const { AWSS3Config } = require('../../config/aws-s3.config')
// const fs = require('fs-extra')
// const path = require('path')

// const listAllObjectsFromS3Bucket = async (s3, bucket, prefix) => {
//
// 	const results = []
// 	let isTruncated = true
// 	let marker
//
// 	while (isTruncated) {
//
// 		let params = { Bucket: bucket }
//
// 		if (prefix) {
// 			params.Prefix = prefix
// 		}
//
// 		if (marker) {
// 			params.Marker = marker
// 		}
//
// 		try {
//
// 			const response = await s3.listObjects(params).promise()
//
// 			response.Contents.forEach(item => {
// 				results.push({ item: item, key: item.key })
// 				console.log(item.Key)
// 			})
//
// 			isTruncated = response.IsTruncated
//
// 			if (isTruncated) {
// 				marker = response.Contents.slice(-1)[0].Key
// 			}
//
// 		} catch (e) {
//
// 			throw new Error(e)
// 		}
// 	}
//
// 	return results
// }
// const getObjectFromBucket = async (s3, bucket, key) => {
//
// 	const params = { Bucket: bucket, Key: key }
//
// 	try {
// 		return await s3.getObject(params).promise()
// 	} catch (e) {
// 		throw new Error(e)
// 	}
// }

class ListContentCommand extends BaseCommand {

	static args = [
		{
			name: 'name',
			description: 'Name of the bucket',
			required: true
		}
	]

	static flags = {
		'extended': flags.boolean({
			char: 'e',
			description: 'Return not only the Key of each item, but also the Size, Etag, StorageClass and LastModified date',
			required: false,
		}),
		'max-items': flags.string({
			char: 'm',
			description: 'Sets the maximum number of keys returned in the response',
			required: false,
			default: 1000
		}),
		prefix: flags.string({
			char: 'p',
			description: 'Limits the response to keys that begin with the specified prefix',
			required: false
		}),
		region: flags.string({
			char: 'r',
			description: 'Region of the bucket',
			required: false,
			default: AWSS3Config.region
		})
	}

	// S3 API response data
	bucketContent = []

	async run() {

		const { flags, args } = this.parse(ListContentCommand)

		this.name = args.name || null

		this.filter = flags.filter || null
		this.prefix = flags.prefix || null
		this.extended = flags['extended']
		this.maxItems = flags['max-items']
		this.region = flags.region

		AWS.config.update({ region: this.region })

		const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

		const params = {
			Bucket: this.name,
			Prefix: this.prefix,
			Delimiter: '/',
			MaxKeys: this.maxItems
		}

		this.log(`fetching content of ${this.name}`)

        const objectItemList = await s3.listObjectsV2(params).promise()

		if (!objectItemList.Contents || objectItemList.Contents.length <= 0) {
			this.log(`could not find any items`)
			return objectItemList
		}

		this.bucketContent = objectItemList.Contents

		this.log(`found ${this.bucketContent.length} items:`)

		// Log/return complete item object
		if (this.extended === true) {
			return this.bucketContent.map(item => {
				this.cli.styledObject(item, ['Key', 'Size', 'ETag', 'Owner', 'StorageClass', 'LastModified'])
				this.log(this.cli.seperatorLine())
				return item
			})
		}

		// Log/return only item.Key
		return this.bucketContent.map(item => {
			this.cli.styledObject(item, ['Key'])
			return item.Key
		})

		// --------------------------------------------------------------------
		// Fetch item:
		// @todo move to new command (s3:get-item)
		// --------------------------------------------------------------------
		// const sampleKey = objectItemList.Contents[1].Key



		// const data = await getObjectFromBucket(s3, this.name, sampleKey)
        //     .then(res => res.Body)

        // const filePath = path.join(__dirname, `/tmp/file_${Date.now()}.jpg`)

        // await fs.outputFile(filePath, data)
        //     .then(res => {
        //         console.log(`file stored at: ${filePath}`)
        //     })

		// --------------------------------------------------------------------
            //     this.log(filePath)

        // this.log('content fetched!')
		// this.log(content)

        // try {
        //     await fs.writeFile(filePath, content.Body.toString());
        // } catch (e) {
        //     throw new Error(e)
        // }

        // console.log(`${filePath} has been created!`)

		// return this.bucketContent
	}
}

ListContentCommand.description = `
Lists the content of a specific S3 bucket.
`

module.exports = ListContentCommand
