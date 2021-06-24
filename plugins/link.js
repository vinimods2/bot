let handler = async (m, { conn, args }) => {
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)), m)
}
handler.help = ['linkgrupo']
handler.tags = ['grupo']
handler.command = /^link(gru?po)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler

