const dotenv = require('dotenv')
const fs = require('fs-extra')
const path = require('path')
const { compose } = require('./index')

const currentEnv = dotenv.config().parsed

const baseEnvs = ['AWS_API_KEY', 'AWS_IAM_USER']

const createFile = path => data => fs.createFile(path, data)
const objectToString = (obj, seperator = '\n') => Object.keys(obj).reduce((p, c) => (p += `${c}${seperator}`), '')

const tryCatch = async (tryer, ...args) => {
	try {
		return await tryer(...args)
	} catch (error) {
		throw new Error(error)
	}
}

const createEnvFile = data => createFile(path.join(__rootDir, '/.env'), data)

const createEnvWithDefaulData = async () => {
	const envFileData = await objectToString(baseEnvs)
	await tryCatch(createEnvFile(envFileData))
}

exports.parseEnv = async () => {
	if (!currentEnv) {
		await createEnvWithDefaulData()
	}

	// check current env, add missing baseEnvs
}

const addBaseEnvs = async data => {
	const currentEnvKeys = Object.keys(currentEnv)

	// What keys are missing in the current .env file? Turn them into a valid .env file.
	const missingBaseKeys = baseEnvs.reduce((p, c) => (!currentEnvKeys.includes(c) ? [...p, c] : null), [])

	// const parsedCurrentEnv = objectToString(currentEnv, '\n')
	// const parsedMissingKeys = objectToString(missingBaseKeys, '\n')
	// const newDotEnvData = `${parsedCurrentEnv}${parsedMissingKeys}`

	// console.log(newDotEnvData)
	// console.log(missingBaseKeys)

	// await fs.outputFile(path.join(__rootDir, '/.env'), missingBaseKeys)
}
