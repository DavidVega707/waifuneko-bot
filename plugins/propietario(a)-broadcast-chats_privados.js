import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*ā­āā[ š¾šššššš¾š¼šæš | ššššš¾š ]āāāā¬£*\n*ā*\n*āš* ${text}\n*ā*\n*ā°āāāāāāāāāāāāāāāāāāā¬£*`, 'ā *š¾šššššš¾š¼šæš šššš¾šš¼š*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['š šš£šš¤ ššššššš”', '.cuentasgb'],['š ššš£šŖ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'šŖš®š¶š³šš”š²šøš¼-šš¼š | šš¢š·šŖš„šš¦šØš¢707',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ā *El mensaje fue enviado a ${chats.length} Chats Privados*\n*Es posible que no se haya enviado a todos los Chats Privados. Disculpe.*\n\nā *The message was sent to ${chats.length} Private Chats*\n*May not have been sent to all Private Chats. Excuse me.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
