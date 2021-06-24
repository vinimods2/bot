const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '*Foto/Vídeo não encontrado *'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw '*Falha cade a media*'
  }
}
handler.help = ['sticker 〘mencione imagem〙', 'sticker 〘url〙', 'stikergif 〘mencione gif〙', 'stikergif 〘url〙']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler

