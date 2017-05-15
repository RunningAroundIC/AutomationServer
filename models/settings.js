var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingsSchema = new Schema
({
	appName: String,
	owner: String,
	lifX: Boolean,
	philipsHue: Boolean,
	ikeaTraadFri: Boolean,
	custom: Boolean
});

module.exports = mongoose.model('Settings', SettingsSchema); 