/**
 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Thenuka<https://github.com/Thenukadilitha>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/
const config = require('../config');
const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

// --- Helper function to generate category list ---
const generateList = (title, emoji, cmds) => `
╔════════════════════════╗
║ ${emoji} **${title.toUpperCase()} 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** ${emoji} ║
╚════════════════════════╝
╭─━─〔 ⚡ **Commands** ⚡ 〕━━╮
${cmds.map(c => `┃ ◈ **${c}**`).join('\n')}
╰─━─━─━─━─━─━─━─━─╯
📊 **Total Commands in ${title}:** ${cmds.length}

> 💡 **𝙋𝙊𝙒𝙀𝙀𝙍𝙀𝘿 𝘽𝙔 your Thenuka bot**
`;
// ------------------------------------------------

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const categoryInput = q ? q.toLowerCase() : '';

        // --- Category Logic based on input argument (q) ---
        switch (categoryInput) {
            case '1':
            case 'main':
                return reply(generateList('MAIN', '🔧', [
                    'alive', 'menu', 'menu2', 'system', 'ping', 'runtime', 'jid'
                ]));

            case '2':
            case 'search':
                return reply(generateList('SEARCH', '🔍', [
                    'yts', 'image'
                ]));

            case '3':
            case 'download':
                return reply(generateList('DOWNLOAD', '📥', [
                    'apk', 'twitter', 'gdrive', 'mediafire', 'fb', 'play', 'play2', 'video', 'video2', 'yta', 'tiktok', 'ytmp3'
                ]));

            case '4':
            case 'group':
                return reply(generateList('GROUP', '👥', [
                    'mute', 'unmute', 'promote', 'demote', 'del', 'add', 'admins', 'groupdesc', 'groupinfo', 'gname', 
                    'setsubject', 'tagall', 'hidetag', 'unlock', 'lock', 'join', 'leave', 'invite', 'tagadmin'
                ]));

            case '5':
            case 'owner':
                return reply(generateList('OWNER', '👨‍💻', [
                    'shutdown', 'alive', 'ping', 'clearchats', 'block', 'unblock', 'repo', 'owner', 'owner2'
                ]));
                
            case '6':
            case 'fun':
            case 'tools':
                return reply(generateList('FUN/TOOLS', '🍿', [
                    'joke', 'flirt', 'truth', 'dare', 'fact', 'pickupline', 'character', 'repeat', 'spam', 'readmore'
                ]));
        }
        // --- End of Category Logic ---

        // If no valid category argument is given, send the main menu
        let desc = `*👋 Hello ${pushname}*

*╭─「 ${config.BOT_NAME} 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 3.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • MAIN*
*├ 2 • SEARCH*
*├ 3 • DOWNLOAD*
*├ 4 • GROUP*
*├ 5 • OWNER*
*├ 6 • FUN*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 To view commands, type the command and category number/name, e.g.: !menu 1 or !menu main*_

> *𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 your Thenuka bot*`;

        // Send the menu message
        await conn.sendMessage(from, { image: { url:https://github.com/Thenukadilitha/Thenuka-bot/blob/main/Images/IMG-20251020-WA0002.jpg?raw=true config.MENU_IMG}, caption: desc }, { quoted: mek });

    } catch (e) {
        console.error("Menu command error:", e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
