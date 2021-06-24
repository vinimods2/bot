const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '*Identifique um deles e insira o número para verificação!*'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Feito adicionado Usuário✅*\n\n*Nome : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Vencimento:* 30Dias\n*Obrigado Premium Adicionado!*`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['adicionarpremium 〘nome〙']
handler.tags = ['owner']
handler.command = /^adicionarpremium$/i
handler.rowner = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
