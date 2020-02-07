exports.ServiceModel = ({ displayName = '', name = '', version = 1, groups = [], store = {}, methods = {} } = {}) => ({
	displayName,
	name,
	version,
	groups,
	...store,
	...methods,
	type: 'service'
})

exports.serviceReturnHandle = ({ error = null, ...response } = {}) => ({
	...response,
	error
})
