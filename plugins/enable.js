let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'bemvindo':
      chat.welcome = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    default:
      return m.reply(`
Lista opçoes: bemvindo | delete | public

Exemplo
${usedPrefix}bemvindo 1
${usedPrefix}bemvindo 0
`.trim())
  }
  m.reply(`
*BEM-VINDOS ATIVOS NESSE GRUPO!!!*
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'dono']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
