const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*Arise, Hunter!* ⚔️

Your *Solo Leveling Bot* shadow session has been created successfully.  

🔮 *Shadow ID:* Sent above  
⚠️ *Keep it safe!* Sharing this could mean your downfall.  

——————  

*📢 Stay in the Shadows:*  
Join the official Hunter’s Channel:  
https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A  

*🌀 Source Code:*  
Forge your own path on GitHub:  
https://github.com/NaCkS-ai/Drakonis-MD  

——————  

> *© Sung-Suho’s Legacy*  
Stay strong, stay unseen. 👤`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "⚔️ Solo Leveling — Shadow Pair",
thumbnailUrl: "https://files.catbox.moe/x8vle8.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = 
`*Arise, Hunter!* ⚔️  

Your *Shadow Session* has been forged successfully.  

🔮 *Shadow ID:* Sent above  
⚠️ *Keep it safe!* Sharing this could mean your downfall.  

——————  

*📢 Stay in the Shadows:*  
Join the official Hunter’s Channel:  
https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A  

*🌀 Source Code:*  
Forge your own path on GitHub:  
https://github.com/NaCkS-ai/Drakonis-MD  

——————  

> *© Sung-Suho’s Legacy*  
Stay strong, stay unseen. 👤`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "⚔️ Solo Leveling — Shadow Pair",
thumbnailUrl: "https://i.imgur.com/GVW7aoD.jpeg",
sourceUrl: "https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 🖤 𝗔𝗿𝗶𝘀𝗲! Connected as Shadow ✅ Restarting process...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("⚠️ Shadow realm collapsed — Restarting service...");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Shadow Gate Closed (Service Unavailable)" });
            }
        }
    }
   return await MALVIN_XD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☠️ Shadow World Reset...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
