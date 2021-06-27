let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml/', '/canvas/wasted', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png%27),
  }), 'gta.png', 'GTA WASTED GOSTOU?', m)
}

handler.help = ['gta']
handler.tags = ['sticker']

handler.command = /^(gta)$/i

module.exports = handler
