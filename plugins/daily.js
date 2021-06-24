let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    m.reply('+1000 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Você reivindicou seus xp diárias hoje')
}
handler.help = ['diaria', 'claim']
handler.tags = ['xp']
handler.command = /^(diaria|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

