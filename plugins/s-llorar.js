import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐๐ ๐ฟ๐ ๐๐๐๐พ๐๐๐๐ ๐๐๐๐ผ๐ ๐ฟ๐๐๐ผ๐พ๐๐๐๐ผ๐ฟ๐๐ ๐๐๐ *#on stickers* ๐๐ผ๐๐ผ ๐ผ๐พ๐๐๐๐ผ๐\n\n๐๐๐ ๐๐๐๐พ๐๐๐๐ ๐พ๐๐๐๐ผ๐๐ฟ๐ ๐ผ๐๐ ๐ฟ๐๐๐ผ๐ฝ๐๐๐ฟ ๐๐๐ *#on stickers* ๐๐ ๐๐๐ผ๐ฝ๐๐`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '๐ ๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐'
let nombre2 = '๐๐ข๐ท๐ช๐ฅ๐๐ฆ๐จ๐ข707'
 
const s = [
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47jownk0m3q4bbrmiarbcjyzrvfcldw6fq2cl9qgeo&rid=giphy.gif&ct=g',
'https://media3.giphy.com/media/UYzNgRSTf9X1e/giphy.gif?cid=ecf05e47eyl7fbdshc46l04t6n9vhq8tlb7v68z5grx9sk4h&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/4bBLOhnMb0vHG/giphy.gif?cid=ecf05e47ccuhintdj5piel7ar1kpijylv7yl7jety6zwb0n4&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/KDRv3QggAjyo/giphy.gif?cid=ecf05e47u0k1a48j85ewtw30exm64hd7yfcsol47x4x5h1kq&rid=giphy.gif&ct=g',
'https://media3.giphy.com/media/xUPGcq0kyXkLQBvAIM/giphy.gif?cid=ecf05e47gscyh1yvbrh4zudbdaeqx5wmxmwal01nd4sqypgv&rid=giphy.gif&ct=g',
'https://c.tenor.com/iZukxR3qFRQAAAAi/gato-pls-pls-cat.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
 
 }
handler.customPrefix = /llorar|yorar|llorando|llorando|llorare|llorarรก|lloremos|llorastes|lloraste|llora|llorรณ|lloro|yoro|๐ญ|๐ข|๐ฐ|๐ฟ/i 
handler.command = new RegExp
handler.exp = 50
export default handler
