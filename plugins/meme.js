let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml/', '/meme'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Erro!'
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m)
}

handler.help = ['meme']
handler.tags = ['sticker']

handler.command = /^(meme)$/i

handler.group = true

module.exports = handler
