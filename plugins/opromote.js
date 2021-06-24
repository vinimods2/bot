let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['promover','admin','^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(promover|oadmin|o\^)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
