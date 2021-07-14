let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nenhum texto'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mencionar <texto>']
handler.tags = ['tools']

handler.command = /^mencionar$/i

module.exports = handler
