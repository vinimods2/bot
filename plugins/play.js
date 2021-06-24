let limit = 30
let yts = require('yt-search')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'O que você está procurando?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Não encontrado'
  let { dl_link, thumb, title, filesize, filesizeF} = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
${isLimit ? 'Coloque-o ': ''}
`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
`.trim(), m)
}
handler.help = ['play', 'play2'].map(v => v + ' 〘nome da musica〙')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
