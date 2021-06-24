let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Deixou' : 'Ingressou'}]`).join`\n\n`
  conn.reply(m.chat, 'Lista Groups:\n' + txt, m)
}
handler.help = ['grupo', 'listagrupo']
handler.tags = ['dono']
handler.command = /^(grupo(|lista))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler

