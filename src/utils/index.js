exports.parseDotEnv = require('./dotenv')

/**
 * Type of object (number, boolean, null, object, etc)
 * @param  {*} obj - some JS object
 * @return {String}     - type of the given object.
 */
const type = (exports.type = obj =>
	Object.prototype.toString
		.call(obj)
		.replace(/^\[object (.+)\]$/, '$1')
		.toLowerCase())

/**
 * Checks if an object is null
 * @param {* | null} obj
 * @returns {boolean} - true if null, false if not null.
 */
exports.isNull = obj => type(obj) === 'null'

/**
 * Checks if an object is an object
 * @param {* | null} obj
 * @returns {boolean} - true if object, false if not.
 */
exports.isObject = obj => type(obj) === 'object'

/**
 * Checks if an object is an array
 * @param {* | null} obj
 * @returns {boolean} - true if array, false if not.
 */
exports.isArray = obj => type(obj) === 'array'

/**
 * No action function. Does nothing.
 */
exports.noop = () => {}

/**
 * compose :: (a -> b) -> a -> (b -> a)
 */
exports.compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]


/**
 * Creates an object that can't be changed.
 * @param {object} obj
 * @returns {ReadonlyArray<any> | * | Readonly<*>}
 */
exports.freezeObj = obj => Object.freeze(obj)
