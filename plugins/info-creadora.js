import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ ๐๐\nWa.me/593993684821\n๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ *2* ๐๐\nWa.me/50498965677\n๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ *3*๐๐\nWa.me/51993042301\n\n๐งก *Eso son los contactos para ti.*\n๐ *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `โฆ ๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ เผ`,
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
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '๐ ๐ฟ๐ค๐ฃ๐๐ง | ๐ฟ๐ค๐ฃ๐๐ฉ๐'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '๐ ๐๐ฃ๐๐ค๐ง๐ข๐๐๐๐ค๐ฃ | ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '๐ซ ๐๐๐ฃ๐ชฬ ๐๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค | ๐๐ช๐ก๐ก ๐๐๐ฃ๐ช'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await m.reply(`๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ ๐๐ Wa.me/593993684821\n๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ *2* ๐๐ Wa.me/50498965677\n๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐ *3* ๐๐ Wa.me/51993042301`)  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Comunรญcate con Mรญ Creador por Instagram!!, Solo por ese medio puede ayudarte sobre Temas de WaifuNekoBot\n\nCommunicate with My Creator on Instagram!!, Only by that means can help you on WaifuNekoBot Themes'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/DavidVega707/waifuneko-bot', '๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐', 'https://www.instagram.com/gata_dios', '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', [
['โ ๐๐ง ๐๐ก ๐๐ฃ๐๐๐๐ค | ๐๐ค ๐ฉ๐ค ๐จ๐ฉ๐๐ง๐ฉ', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|CREADOR|creador)$/i
export default handler 
