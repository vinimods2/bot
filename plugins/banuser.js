let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quem voce quer banir?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Pronto banido'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `*banido com sucesso voce nao usara o bot mais!*`,m)
}
handler.help = ['ban 〘@user〙']
handler.tags = ['dono']
handler.command = /^ban$/i
handler.rowner = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
