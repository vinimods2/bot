let handler = function (m) {
  if (!m.quoted) throw 'Responder mensagem do bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Só pode deletar mensagens minhas'
  if (!isBaileys) throw 'A mensagem não é enviada por um bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['grupo']

handler.command = /^del(ete)?$/i
handler.mods = false
handler.owner = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
