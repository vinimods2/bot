let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '*Quem que voce quer desbanir?*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Usuario Desbanido!'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
}
handler.help = ['ban']
handler.tags = ['dono']
handler.command = /^unban$/i
handler.rowner = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

module.exports = handler
