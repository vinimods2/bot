let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*Nome*: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n*Status:* ' + about : ''}
*Link:* https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
*XP:* ${exp} (${exp - min} / ${xp})
*Level:* ${level}
*Limite:* ${limit}
*Registrado:* ${registered ? 'Ok (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\nÚltima reivindicação: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

