import fs from 'fs'
let handler = async (m, { conn }) => { 
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*â­â[ ððððžðððð ððð | ððððððð ððððð ]ââŽĢ*\n*â*\n` + prem.map(v => '*â* âĨ ð @' + v.replace(/@.+/, ' ð')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `ððð ððð!! ðž ðððð ðžðð ððððžð!! âĻ`.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ðŠðŪðķðģððĄðēðļðž-ððžð | ððĒð·ðŠðĨððĶðĻðĒ707',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})
   
await conn.sendHydrated(m.chat, null, wm, null, ig, 'ððĢðĻðĐððð§ððĒ', null, null, [
['ððĪðĨ ððĻðŠðð§ððĪðĻ | ððĻðð§ðĻ ð', '.top'],
['ðūðŠððĢðĐððĻ ðððððððĄððĻ | ðžðððĪðŠðĢðĐðĻ â', '/cuentasgb'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
  
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listapremium|listprem|premlist)$/i

export default handler
