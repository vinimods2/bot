let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Saiu' : 'Entrou'}]`).join`\n\n`
  conn.reply(m.chat, 'Grupos de lista:\n' + txt, m)
}
handler.help = ['grupoinfo', 'grouplist']
handler.tags = ['info']
handler.command = /^(grup(o|info))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
