const { Command } = require('discord.js-commando');

module.exports = class MotivateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'motivate',
            aliases: [
                'encourage',
                'justdoit'
            ],
            group: 'response',
            memberName: 'motivate',
            description: 'Motivates someone. (;motivate @User)',
            examples: [';motivate @User'],
            args: [{
                key: 'thing',
                prompt: 'What do you want to motivate?',
                type: 'string',
                default: ''
            }]
        });
    }

    run(message, args) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        const userToMotivate = args.thing || message.author;
        return message.say(`${userToMotivate}, https://www.youtube.com/watch?v=ZXsQAXx_ao0`);
    }
};
