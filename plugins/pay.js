let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Insira a quantidade de exp a ser dada'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag um'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Apenas números'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw 'Voce nao tem exp insuficiente para transferir '
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay 〘@user〙 〘amount〙']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

