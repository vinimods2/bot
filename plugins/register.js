const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Você já está registrado\nDeseja registrar-se novamente? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato incorreto\n*${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'O nome não pode estar vazio (alfanumérico)'
  if (!age) throw 'A idade não pode estar vazia (figuras)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar foi bem sucedido!

┏━「 Info 」
┃ Name: ${name}
┃ Idade: ${age}thn
┃ Serial: ${sn}
┗━━━━
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' 〘name〙.〘idade〙')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

