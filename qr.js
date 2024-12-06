const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: 'PANTHER;;;' + b64data });
	
				   let SIGMA_MD_TEXT = `
*𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝙼𝙳 𝙸𝚂 𝚁𝚄𝙽𝙽𝙸𝙽𝙶*
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
║ ❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@caseyehodes01_

║ ❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/254112192119_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/caseyweb/ZHEZHO-MD_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/Lcw1jJCMa6a82RDEW5XM1j_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E_

║ ❒ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/caseyrhodes _

║ 🐯🐯🐯
╚════════════════════╝ 
 *©𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗗 𝗧𝗘𝗖𝗛*
___________________________________

Don't Forget To Give Star⭐ To My Repo`
					
	 await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
