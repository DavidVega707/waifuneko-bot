let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro ð has minado','ðâĻ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) âïļ Obtienes','Felicidades!! Ahora tienes','âïļâïļâïļ Obtienes'])}`
let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

let xp = Math.floor(Math.random() * 2000)
global.db.data.users[m.sender].exp = xp * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*ð Vuelva en ${msToTime(time - new Date())} para continuar minando âïļ*`  

conn.sendHydrated(m.chat, `*${minar} ${xp} ðð*`, wm, pp, md, 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ðððĢðð§ ðŋðððĒððĢðĐððĻ ð', `.minar3`],
['ðððĢðð§ ðððĐððūðĪððĢðĻ ð', `.minar2`],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', `.menu`]
], m,)
global.db.data.users[m.sender].lastmiming = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ðð*`)

}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

