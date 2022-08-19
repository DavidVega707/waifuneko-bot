import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 💖🐈\nWa.me/593993684821\n𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 *2* 💖🐈\nWa.me/50498965677\n𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 *3*💖🐈\nWa.me/51993042301\n\n🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `✦ 𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 ༄`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await m.reply(`𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 💖🐈 Wa.me/593993684821\n𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 *2* 💖🐈 Wa.me/50498965677\n𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁 *3* 💖🐈 Wa.me/51993042301`)  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Comunícate con Mí Creador por Instagram!!, Solo por ese medio puede ayudarte sobre Temas de WaifuNekoBot\n\nCommunicate with My Creator on Instagram!!, Only by that means can help you on WaifuNekoBot Themes'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/DavidVega707/waifuneko-bot', '𝗪𝗮𝗶𝗳𝘂𝗡𝗲𝗸𝗼-𝗕𝗼𝘁', 'https://www.instagram.com/gata_dios', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|CREADOR|creador)$/i
export default handler 
