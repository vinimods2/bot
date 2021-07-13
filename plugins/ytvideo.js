let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'que você está procurando?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duração: ${v.timestamp}
Carregado ${v.ago}
${v.views} views
      `.trim()
    }
  }).filter(v => v).join('\n┣━━━━━━━━━━━━━━━━━━━━\n')
  m.reply(teks)
}
handler.help = ['', 'ideo'].map(v => 'ytv' + v + ' <procurar>')
handler.tags = ['musica']
handler.command = /^ytv(ideo)?$/i

module.exports = handler
