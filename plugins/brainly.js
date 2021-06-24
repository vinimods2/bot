const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Você vê?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERGUNTA PARA ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*RESPONDA PARA ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.help = ['𝚋𝚛𝚊𝚒𝚗𝚕𝚢〘𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊〙']
handler.tags = ['ferramenta']

handler.command = /^brainly$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
