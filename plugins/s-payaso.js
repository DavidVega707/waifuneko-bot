import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}ššš š¾ššš¼ššæšš šæš šššš¾šššš šššš¼š šæššš¼š¾šššš¼šæšš ššš *#on stickers* šš¼šš¼ š¼š¾šššš¼š\n\nššš šššš¾šššš š¾šššš¼ššæš š¼šš šæššš¼š½šššæ ššš *#on stickers* šš ššš¼š½šš`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'š šŖš®š¶š³šš”š²šøš¼-šš¼š'
let nombre2 = 'šš¢š·šŖš„šš¦šØš¢707'
 
const s = [
'https://i.gifer.com/3OO52.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /payaso|š¤”/i 
handler.command = new RegExp
handler.exp = 50
export default handler
