export async function all(m, conn) {
    //let res = await conn.groupAcceptInvite(code)
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `*${this.user.name}* *SE VA DEL GRUPO!!!, SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*\n\nā *ASISTENCIA PARA USUARIOS*\n*https://www.instagram.com/gata_dios*`
        let pp = './media/menus/Menu2.jpg'
    //await this.sendButton(m.chat, caption, wm, null, [['Eliminar caducado', '/delexpired'], ['Cec caducado', '/cekexpired']], null)
await this.sendButton(m.chat, caption, wm, pp, [['šš¼ššš¼ šššššš | š½šš š', '.hastapronto']], null)
//await conn.sendHydrated2(m.chat, caption, wm, pp, 'https://github.com/DavidVega707/waifuneko-bot', 'šŖš®š¶š³šš”š²šøš¼-šš¼š', ig, 'šš£šØš©ššš§šš¢', null, m,)
        
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}

