/* CREDITOS A https://github.com/FG98F 
const dir = [
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/yhdyhnap',
  'https://tinyurl.com/yfwjbou7',
  'https://tinyurl.com/yh3e3ogt',
  'https://tinyurl.com/yfmhpvxs',
  'https://tinyurl.com/ygpxka9q'
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['dado', 'dados'] 
export default handler
*/





import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}ššš š¾ššš¼ššæšš šæš šššš¾šššš šššš¼š šæššš¼š¾šššš¼šæšš ššš *#on stickers* šš¼šš¼ š¼š¾šššš¼š\n\nššš šššš¾šššš š¾šššš¼ššæš š¼šš šæššš¼š½šššæ ššš *#on stickers* šš ššš¼š½šš`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'š šŖš®š¶š³šš”š²šøš¼-šš¼š'
let nombre2 = 'šš¢š·šŖš„šš¦šØš¢707'
 
const s = [
'https://media.giphy.com/media/h5cY0X4NcHP2JiFXNG/giphy.gif',
'https://media.giphy.com/media/SSinJFA7xCih5g9F1c/giphy.gif',
'https://media.giphy.com/media/kBHH2rfm1VHIYgodQx/giphy.gif',
'https://media.giphy.com/media/UpDKR8EYG5zFtYhWNz/giphy.gif',
'https://media.giphy.com/media/h8mwX2Tt1R2oIOhszC/giphy.gif',
'https://media.giphy.com/media/iGeW8L2Pvzzbtf6jII/giphy.gif'

];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler
