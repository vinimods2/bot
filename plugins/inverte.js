let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml/', '/canvas/invert', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png%27),
  }), 'invertido.png', 'Imagem invertida gostou?', m)
}

handler.help = ['inverte']
handler.tags = ['sticker']

handler.command = /^(inv)$/i

module.exports = handler
