let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link inválido'
    let res = await conn.acceptInvite(code)
    m.reply(`Juntou-se ao grupo com sucesso ${res.gid}`)
}
handler.help = ['gpprem <link>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
