const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FZlChDbL#J6a_qUf0VLQJIiu3k87Z3igz_z4KYtnCKQoDCuXtMzM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Thenukadilitha/Thenuka-bot/blob/main/Images/IMG-20251020-WA0002.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 THENUKA-MD Is Alive Now😍*",
BOT_OWNER: '94760410611',  // Replace with the owner's phone number



};
