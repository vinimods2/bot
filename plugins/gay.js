let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml/', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png%27'),
  }), 'gay.png', 'quem aqui quer ser gay e me estuprar gays gays?', m)
}

handler.help = ['gay']
handler.tags = ['sticker']

handler.command = /^(gay)$/i

module.exports = handler
