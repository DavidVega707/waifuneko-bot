import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}๐๐๐พ๐๐๐ฝ๐ผ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐๐๐ผ๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐๐๐ ๐๐๐ผ๐ "@"\n๐๐๐๐๐๐๐\n*${usedPrefix + command} mundo_dos_animes81*\n\n๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐ผ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ "@"\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `โ ๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ | ๐๐๐๐๐๐๐ ๐๐๐พ๐๐๐๐\n๐ *${text}*`, m, false)
  
  let info = `๐ *Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.*\n\n๐ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, '๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐', null, null, [
['๐๐๐ฃ๐ช ๐ฟ๐๐จ๐๐๐ง๐๐๐จ ๐', '#descargasmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค | ๐๐ช๐ก๐ก ๐๐๐ฃ๐ช โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ๏ธ', '/menu']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
