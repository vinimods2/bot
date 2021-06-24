let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('*Pronto Saidas Ativas!*')
  } else throw 'Cadê o texto?'
}
handler.help = ['saiu 〘texto〙']
handler.tags = ['grupo', 'grupo']

handler.command = /^saiu$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

