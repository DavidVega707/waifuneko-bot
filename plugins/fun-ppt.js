import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `ððððŋððž, ððžððð, ð ððððððž\n\nððŠððððĻ ðŠðĻðð§ ðĄðĪðĻ ð―ðððððð ðĨðð§ð ððŠððð§ ðĪ ðĐððĒððððĢ ðĨðŠððððĻ ðŠðĻðð§ ððĻðĐðĪðĻ ððĪðĒððĢððĪðĻ:\n${usedPrefix + command} ðĨðððð§ð\n${usedPrefix + command} ðĨððĨððĄ\n${usedPrefix + command} ðĐðððð§ð\n\nððĻð ððĢ ðĒððĢðŠðĻððŠðĄððĻ\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ððððð§ð ðĨ', `${usedPrefix + command} piedra`],
['ðððĨððĄ ð', `${usedPrefix + command} papel`],
['ððððð§ð âïļ', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
//['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
//['ððĐð§ð ðŦððŊ | ðžððððĢ ðĪ­', `ds`],
//['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
//m.reply(`*_ð° Empate!_*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððððžðð! ðĪ ]âââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâðļ ð―ðĪðĢðĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
//m.reply(`*ðĨģ TÃš ganas! ð*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððžððžðŋð! ð ]ââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð° ðð§ððĒððĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
//m.reply(`*â ïļ TÃš pierdes! â*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððððŋððŋð! ðĪĄ ]âââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð ððð§ðððð: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
//global.db.data.users[m.sender].uang += 125
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
//m.reply(`*ðĨģ TÃš ganas! ð*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððžððžðŋð! ð ]ââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð° ðð§ððĒððĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
//m.reply(`*â ïļ TÃš pierdes! â*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððððŋððŋð! ðĪĄ ]âââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð ððð§ðððð: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)  
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*ðĨģ TÃš ganas! ð*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððžððžðŋð! ð ]ââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð° ðð§ððĒððĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)  
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
//m.reply(`*â ïļ TÃš pierdes! â*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððððŋððŋð! ðĪĄ ]âââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð ððð§ðððð: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)    
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*ðĨģ TÃš ganas! ð*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððžððžðŋð! ð ]ââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð° ðð§ððĒððĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
//m.reply(`*â ïļ TÃš pierdes! â*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððððŋððŋð! ðĪĄ ]âââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð ððð§ðððð: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)    
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*ðĨģ TÃš ganas! ð*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððžððžðŋð! ð ]ââââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð° ðð§ððĒððĪ: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)     
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
//m.reply(`*â ïļ TÃš pierdes! â*\n\n*ððŧ Usted: ${text}*\n*ððŧ El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `â­ââââ[ ððž ððððŋððŋð! ðĪĄ ]âââŽĢ\nâ${name} ððĻðĐðð: ${text}\nâðą ðððĐðð―ðĪðĐ: ${astro}\nâð ððð§ðððð: $${[money0].getRandom()} ðððĐððūðĪððĢðĻ\nâðĩ ððŠ ðŋððĢðð§ðĪ: $${money} ðððĐððūðĪððĢðĻ\nâ°ââââââ[ ${vs} ]ââââââŽĢ`, wm, null, yt, 'ððĪðŠððŠðð', null, null, [
['ðððĢðŠ ððŠðððĪðĻ | ðððĒððĻ ðððĢðŠ ðĄ', '#juegosmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)   
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

/*
let handler = async (m, { command, text }) => { 
if (!text) throw `error, vuelva a intentar.` 
//let id = text.join(' ')

if (command == 'e1') {
 if (text == 'a') {
 m.reply(`Resultado 1`) }
}
  
  if (command == 'e2') {
 if (text == 'b') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'e3') {
 if (text == 'c') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['e1', 'e2', 'e3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['e1', 'e2', 'e3']
handler.tags = ['ejemplo']
handler.command = ['e1', 'e2', 'e3'] //'a', 'b', 'c'

export default  handler */ 
  
