let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Menos *${max - user.exp}* novamente!
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
Parabéns, você subiu de nível!
*${before}* -> *${user.level}*
use * .profile * para verificar
	`.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler