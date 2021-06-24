let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.DATABASE.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
Parabéns, você subiu de nível!
*${before}* -> *${user.level}*
use * .profile * para verificar
	`.trim())
}

module.exports = handler
