import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}šæšš½š ššššššš¼š šš šššš¼š¾š šæš šššššš šš¼šš¼ šæššš¾š¼ššš¼š šš šššæšš\nššššššš\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\nššš šššš ššššš š¼ šššššš šššš šš šæšššššš¼šæ ššš šššæšš\nššš¼šššš\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK šø*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: 'šŖš®š¶š³šš”š²šøš¼-šš¼š | šš¢š·šŖš„šš¦šØš¢707',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `https://github.com/DavidVega707/waifuneko-bot`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}šššššš ššššæšš¼ šš šššæšš šæš šššššš šø\nšššš šššš šš¼šš ššš šššššš šššæšš š„³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'šŖš®š¶š³šš”š²šøš¼-šš¼š | šš¢š·šŖš„šš¦šØš¢707',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/DavidVega707/waifuneko-bot`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `š *InfĆ³rmate sobre las Novedades y recuerda tener la Ćŗltima versiĆ³n.*\n\nš *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'šš£šØš©ššš§šš¢', null, null, [
['ššš£šŖ šæššØššš§šššØ š', '#descargasmenu'],
['ššš£šŖ š¾š¤š¢š„š”šš©š¤ | ššŖš”š” ššš£šŖ āØ', '.allmenu'],
['šš¤š”š«šš§ šš” ššš£šŖĢ | š½ššš  š©š¤ ššš£šŖ āļø', '/menu']
], m,)   
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.limit = 2
handler.exp = 60
export default handler
