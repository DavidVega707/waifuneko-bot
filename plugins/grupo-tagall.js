/*let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*แฆ ๐๐๐๐๐ผ๐๐:* ${pesan}`
let teks = `โญโใ *๐๐๐๐๐พ๐ผ๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐* ใโโฌฃ\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `โโฅ @${username.id.split('@')[0]}\n`}
teks += `โฐโโโโโโ[ *๐  ${vs}* ]โโโโโโฌฃ`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  
conn.sendHydrated(m.chat, teks, `๐๐ฉ๐๐ฆ๐ช๐๐ฉ๐๐จ | ${wm}`, null, 'https://github.com/DavidVega707/waifuneko-bot', '๐ช๐ฎ๐ถ๐ณ๐๐ก๐ฒ๐ธ๐ผ-๐๐ผ๐', null, null, [
['๐๐ฃ๐ซ๐ค๐๐๐ง ๐ค๐ฉ๐ง๐ ๐ซ๐๐ฏ ๐ฃ', `${usedPrefix + command}`],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler */



let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `โญโใ *๐๐๐๐๐พ๐ผ๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐* ใโโฌฃ\n\n${oi}\n\n`
for (let mem of participants) {
teks += `โโฅ @${mem.id.split('@')[0]}\n`}
teks += `โฐโโโโโโ[ *๐  ${vs}* ]โโโโโโฌฃ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
