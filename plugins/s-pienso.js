import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐๐ ๐ฟ๐ ๐๐๐๐พ๐๐๐๐ ๐๐๐๐ผ๐ ๐ฟ๐๐๐ผ๐พ๐๐๐๐ผ๐ฟ๐๐ ๐๐๐ *#on stickers* ๐๐ผ๐๐ผ ๐ผ๐พ๐๐๐๐ผ๐\n\n๐๐๐ ๐๐๐๐พ๐๐๐๐ ๐พ๐๐๐๐ผ๐๐ฟ๐ ๐ผ๐๐ ๐ฟ๐๐๐ผ๐ฝ๐๐๐ฟ ๐๐๐ *#on stickers* ๐๐ ๐๐๐ผ๐ฝ๐๐`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '๐ ๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐'
let nombre2 = '๐๐ข๐ท๐ช๐ฅ๐๐ฆ๐จ๐ข707'
 
const s = [
'https://c.tenor.com/BBNrRQkKdcUAAAAi/anime.gif',
'https://c.tenor.com/OHMxfMcU4eQAAAAi/anime-girl.gif',  
'https://c.tenor.com/7nadUsiwZioAAAAd/satanichia-gabriel-dropout.gif',
'https://c.tenor.com/Gr6Z_6lBm2kAAAAd/satania-satanichia.gif',
'https://i.pinimg.com/originals/e4/f7/a2/e4f7a2ca99c568e64c1d41f2a61133eb.jpg',  
'https://i.pinimg.com/474x/b0/62/3f/b0623f46719f73be8b2d65357d8e30b2.jpg',
'https://i.pinimg.com/736x/e4/df/2d/e4df2d77375455726233c66882e5e0e7.jpg',
'https://i.pinimg.com/236x/2b/c2/fa/2bc2fa0191d01026d9797091d1ba5b2f.jpg' 
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
 
 }
handler.customPrefix = /piensa|pienso|pensarรฉ|pensรณ|pensamos|pensaremos|pensaste|pensando|pensar|๐ค/i 
handler.command = new RegExp
handler.exp = 50
export default handler
