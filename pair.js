PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: 'PANTHER;;;' + b64data });

               let SIGMA_MD_TEXT = `
*𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝙼𝙳 𝚂𝙴𝚂𝙳𝙸𝙾𝙽 𝚁𝚄𝙽𝙽𝙸𝙽𝙶*
*𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝚃𝙴𝙲𝙷𝙽𝙾𝙻𝙾𝙶𝙸𝙴𝚂*
*𝙊𝙒𝙉𝙀𝙍 : 𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂*
____________________________________
╔════◇
║『 𝘾𝘼𝙎𝙀𝙔𝙍𝙃𝙊𝘿𝙀𝙎 𝙈𝘿 𝙄𝙎 𝙍𝙀𝘼𝘿𝙔 𝙏𝙊 𝘿𝙀𝙋𝙇𝙊𝙔』
║ OK YOUR SESSION IS READY COPY IT  
║ AND HOST IT ON HEROKU.
╚════════════════════╝
╔═════◇
║ 『••• OWNER INFO •••』
║ ❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@caseyrhodes01_

║ ❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/254112192119_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/caseyweb/ZHEZHO-MD_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/Lcw1jJCMa6a82RDEW5XM1j_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E_

║ ❒ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/caseyrhodes _

║ 🐯🐯🐯
╚════════════════════╝ 
 *©𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦 𝗧𝗘𝗖𝗛*
___________________________________

Don't Forget To Give Star⭐ To My Repo`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
