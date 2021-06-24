let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('Excluir!!')
    if (global.opts['restringir']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}
handler.tags = ['admin']
handler.command = /^proibirlink$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

module.exports = handler
