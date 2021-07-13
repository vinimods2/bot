let handler = async (m, { conn, participants }) => {
   if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Banido Nao Podera Usar O Bot Mais!!')
   } else m.reply('Há um número de host aqui... ')
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.owner = true

module.exports = handler
