let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '*Quem que voce quer desbanir?*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Usuario Desbanido!'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `*desbanido com sucesso agora respeite pra nao se repetir!*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
