let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `${mg}ðŋðð―ð ðŋð ðððžð ðŋð ððž ððððððððð ððžððððž:\nððððððð\n*${usedPrefix}quitaradmin @tag*\n*${usedPrefix}quitaradmin responder a un mensaje*\n\nððð ðððð ððð ðžð ððððððð:\nðððžðððð\n*${usedPrefix}demote @tag*\n*${usedPrefix}demote reply to a message*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${fg}ðð ðððððð ðð ðððūðððððūðð, ððððððð ðŋð ððððð\n\nððð ðððð―ðð ðð ððððð, ððð ðžððžðð`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.sendHydrated(m.chat, `${eg}ðžððððž ðð ððððð ðð ðððŋðð ðŋðð ðžðŋððð ðŋ\n\nððð ðððð ðð ððð ððð ðžðŋððð ð§`, wm, null, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v) 
handler.tags = ['group']
handler.command = /^(demote|quitarpoder|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
