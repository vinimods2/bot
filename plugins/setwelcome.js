let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('*Pronto Bem-Vindos Ativos!*')
  } else throw 'Cadê o texto?'
}
handler.help = ['entrou 〘texto〙']
handler.tags = ['grupo', 'grupo']

handler.command = /^entrou$/i
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

