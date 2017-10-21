var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Demo Model
 * =============
 */

var Demo = new keystone.List('Demo', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Demo.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Demo.register();
