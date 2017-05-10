var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingsSchema = new Schema
({
	appName: String,
	owner: String,
	LifX: Boolean,
	PhillipsHue: Boolean,
	IkeaTraadFri: Boolean,
	Custom: Boolean
});

module.exports = mongoose.model('Settings', SettingsSchema); 