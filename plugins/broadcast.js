let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.array.filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 ALERTA BOT 」')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Envie mensagens de difusão para ${chats.length} chat_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' 〘𝚝𝚎𝚡𝚝𝚘〙')
handler.tags = ['dono']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

