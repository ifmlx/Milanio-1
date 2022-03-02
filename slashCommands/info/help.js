const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "help",
    usage: '[command]',
    description: "Sends a menu with options!",
    category: "info",
    cooldown: 5,
    userPermissions: "",
    botPermissions: "",
    ownerOnly: false,
    toggleOff: false,

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    async execute(client, interaction, args, ee) {

        try {
            return interaction.reply({
                embeds: [new MessageEmbed()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setAuthor(`${client.user.username} Help Menu`, client.user.displayAvatarURL())
                    .setColor(ee.color)
                    .addFields({
                        name: `🔰┃Information`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "info").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:M_music:919059393268572202>┃Music`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "music").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `💪┃Setup`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "setup").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:moderator:903984765638697012>┃Moderation`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "moderation").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `🎉┃Giveaway`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "giveaway").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:M_ticket:918835311621050428>┃Ticket`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "ticket").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `🔨┃Utility`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "utility").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, )
                ],
                ephemeral: true
            })

        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}