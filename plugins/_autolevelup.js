let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        let role = ((user.level >= 1) && (user.level <= 10)) ? 'Bronze'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Prata'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Ouro'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Platina'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Diamante'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Mestre'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Desafiante'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Elite'
          : 'Elite Pro'

	if (before !== user.level) {
            m.reply(`
*Parabéns, você subiu de nível!*
*${before}* -> *${user.level}*
*Usar* *.profile* *checar*
	`.trim())
            user.role = role
        }
}

module.exports = handler
