let handler = async (m, { conn }) => { 
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nð ${await conn.getName(jid)}\nâ¦ ${jid} \n${chat?.metadata?.read_only ? 'â *SIN ESTAR AQUÃ | NO*' : 'â *SIGO AQUÃ | YES*'}\n\n`
m.reply(`*${gt} ESTÃ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/DavidVega707/waifuneko-bot', 'ðªð®ð¶ð³ðð¡ð²ð¸ð¼-ðð¼ð', null, null, [
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ | ð½ððð  ð©ð¤ ððð£ðª âï¸', '.menu'],
['ð¾ðªðð£ð©ðð¨ ððððððð¡ðð¨ | ð¼ððð¤ðªð£ð©ð¨ â', '/cuentasgb']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
