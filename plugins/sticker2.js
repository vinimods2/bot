const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, false, { asSticker: true })
  else throw 'Cade o texto?'
}
handler.help = ['attp〘𝚝𝚎𝚡𝚝𝚘〙']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

