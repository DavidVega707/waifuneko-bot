import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} ððððž ððððððððððŋð ðð ðūðððžððŋð\n#on restrict | #off restrict\nðð/ððž ððððððððžððð(ðž) ðŋðð―ð ðžðūððððžð ðð ðūðððžððŋð\n\n ððððð ðððð ðžðūððððžðð ððð ðūððððžððŋ\n#on restrict | #off restrict`
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.sendHydrated(m.chat, `ðžð ðððŋð ððððžðŋððūðžðŋð(ðž) ðŋðð ððððð ð`, wm, null, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
}

if (command == 'sacar') { 
conn.sendHydrated(m.chat, `ðžð ðððŋð ððððžðŋððūðžðŋð(ðž) ðŋðð ððððð ð`, wm, null, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
}
  
if (command == 'ban') { 
conn.sendHydrated(m.chat, `ðžð ðððŋð ððððžðŋððūðžðŋð(ðž) ðŋðð ððððð ð`, wm, null, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'sacar', 'ban'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
//handler.premium = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


