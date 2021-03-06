const Command = require('../../structures/Command');
const request = require('node-superfetch');
const { shorten } = require('../../util/Util');
const { GOV_KEY } = process.env;

module.exports = class ApodCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'apod',
			aliases: ['astronomy-picture-of-the-day'],
			group: 'events',
			memberName: 'apod',
			description: 'Responds with today\'s Astronomy Picture of the Day.',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	async run(msg) {
		try {
			const { body } = await request
				.get('https://api.nasa.gov/planetary/apod')
				.query({ api_key: GOV_KEY });
			return msg.say(shorten(body.explanation), { files: [body.url] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
