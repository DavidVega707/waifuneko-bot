let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
ð ð―ððððððððŋð(ðž) ðž ððžð ðūðððððžð ððððūððžððð
ð ððððūððð ðð ððð ðððððūððžð ðžðūðūððððð
âââââââââââââââââ
â *GITHUB*
*${md}*
âââââââââââââââââ
â *INSTAGRAM - ASISTENCIA*
*${ig}*
âââââââââââââââââ
â *YOUTUBE*
*${yt}*
âââââââââââââââââ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/DavidVega707/waifuneko-bot', 'ðŠðŪðķðģððĄðēðļðž-ððžð', null, null, [
['ðð§ðŠðĨðĪðĻ ðððððððĄððĻ | ðð§ðĪðŠðĨðĻ ð°', '.grupos'],
['ðūð§ððððĪð§ð | ðūð§ðððĐðĪð§ ð', '#owner'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdewaifunekobot|cuentawaifunekobot|cuentaswaifunekobot$/i
handler.exp = 35
export default handler
