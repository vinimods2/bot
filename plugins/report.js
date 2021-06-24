// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Por favor, insira um relatório', m)
    if (text > 300) return conn.reply(m.chat, 'Desculpe, o texto é muito longo, máximo de 300 textos!', m)
    var nomor = m.sender
    const laporan = `*「 REPORTE 」*\nNome: https://wa.me/${nomor.split("@s.whatsapp.net")[0]}\nMensagem: ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    conn.reply(m.chat, '✔️Problemas foram relatados ao DONO do Bot, se for fake / main2 reports não serão respondidos!', m)
}
handler.help = ['bug', 'report'].map(v => v + '〘relátório〙')
handler.tags = ['main']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
