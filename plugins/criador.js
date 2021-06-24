let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '5514997239463', 'MEU CRIADOR', m)
}
handler.help = ['dono', 'criador']
handler.tags = ['info']

handler.command = /^(dono|criador)$/i

module.exports = handler
