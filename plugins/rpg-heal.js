import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `ππ ππΌπππΏ ππππΌ πππππΌ β€οΈ\nππππ πππΌπππ ππ ππππ β€οΈ`, wm, imgr + `SALUD | HEALTH: ${user.health}`, [
[`ποΈ πΌπππππππΌπ | πππππππ`, `${usedPrefix}adventure`], [`π πππππππΌπππ | πππππππππ`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 2)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((50 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} *POCIΓN INSUFICIENTE* ${htka}`, 
`NECESITAS COMPRAR ${count - user.potion} POCIΓN π₯€ PARA CURAR
TU SALUD ACTUAL ES DE ${user.health} 
TIENES ${user.potion} π₯€ POCIΓN EN TU ALMACΓN 
ββββββββββββββββ
PROPINA :
'COMPRAR POCIΓN π₯€' | 'PREGUNTAR A TODOS'`.trim(), imgr + 'lowpotion', [
[`COMPRAR POCIΓN π₯€`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PREGUNTAR A TODOS`, `${usedPrefix}tagall *ALGUIEN POR FAVOR ENVIAR ${count - user.potion} POCIΓN A MI.*
*Β» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
  
    user.potion -= count * 1
    user.health += heal * count
    
conn.sendButton(m.chat, `*βββββγ SALUD COMPLETA γβββββ*`, `EXITOSAMENTE USO ${count} DE POCIONES π₯€ PARA RECUPERAR SU SALUD`, imgr + 'Salud Completada', [
[`Aventurar`, `${usedPrefix}adventure`]], m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
