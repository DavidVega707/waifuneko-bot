let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*ðððððžðð:* ${pesan}`
let text = 
`â­ââ[ *ðððððūðžððŋð ðžðŋðððð* ]ââââŽĢ 
${oi}

*ðžðŋðððð:*
${listAdmin}

ðððžð ðð ðūðžðð ðŋð ððððððððūððž
â°ââââââ[ *ð  ${vs}* ]ââââââŽĢ`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
  
await conn.sendHydrated(m.chat, null, `ðžððĒððĢðĻ | ${wm}`, null, 'https://github.com/DavidVega707/waifuneko-bot', 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ â', '.menu']
], m)//, false, { mentions: [...groupAdmins.map(v => v.id), owner] })  
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
