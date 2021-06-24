global.math = global.math ? global.math : {}
let handler = async (m, { conn, text }) => {
  let id = m.chat
  if (id in global.math) {
    clearTimeout(global.math[id][3])
    delete global.math[id]
    m.reply('𝙷𝙰𝙷𝙰 𝙽𝙰𝙾 𝚃𝙰 𝙲𝙾𝙻𝙰𝙽𝙳𝙾 𝙽𝙰 𝙿𝚁𝙾𝚅𝙰 𝙽𝙰𝙾 𝙽𝙴𝙷')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Conteúdo?'
    throw 'Formato incorreto, apenas 0-9 e símbolo -, +, *, /, ×, ÷, π, e, (, ) que apoiado'
  }
}
handler.help = ['calc 〘expressao〙']
handler.tags = ['ferramenta']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
handler.mods = false
handler.owner = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
