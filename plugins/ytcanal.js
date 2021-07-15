let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'que você está procurando?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'channel': return `
*${v.name}* *(${v.url})*
*${v.subCountLabel}* *(${v.subCount})* *Inscritos*
*${v.videoCount}* *Videos*
`.trim()
    }
  }).filter(v => v).join('\n╾┣━━━━━━━━━━━━━━━━━━━━┫╼\n')
  m.reply(teks)
}
handler.help = ['', 'anal'].map(v => 'ytc' + v + ' <procurar>')
handler.tags = ['downloader']
handler.command = /^ytc(anal)?$/i

module.exports = handler
