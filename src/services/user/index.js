const { ServiceModel } = require('../../core/models/service.model')

exports.UserService = ServiceModel({
	displayName: 'User',
	name: 'user',
	version: 1,
	groups: [ 'user', 'settings', 'config', 'internal' ],
	methods: []
})
