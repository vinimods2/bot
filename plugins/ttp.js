const { sticker2 } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) {
    let stiker = await sticker2(null, global.API('xteam', '/ttp', { file: '', text }))
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['sticker3 〘texto〙']
handler.tags = ['sticker']
handler.command = /^sticker3$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

