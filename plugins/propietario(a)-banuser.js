let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}šššššššš š¼ š¼šššššš šš¼šš¼ š½š¼ššš¼š\nššššššš\n*${usedPrefix + command} @tag*\n\nšš¼š ššššššš šš š½š¼š\nššš¼šššš\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}šššššššš š¼ š¼šššššš šš¼šš¼ š½š¼ššš¼š\nššššššš\n*${usedPrefix + command} @tag*\n\nšš¼š ššššššš šš š½š¼š\nššš¼šššš\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg}šš/šš¼ šššš¼ššš(š¼) ššš š½š¼ššš¼šæš(š¼) š\nšš šššæšš¼ ššš¼š š¼ ${gt}\n\nššš šššš šš¼š š½š¼ššššæ š±\nš¾š¼šššš ššš šŖš®š¶š³šš”š²šøš¼-šš¼š`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
handler.admin = true 
export default handler 
