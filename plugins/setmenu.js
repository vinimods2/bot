let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\.)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu definido com sucesso\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu é reiniciado', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' configurado com sucesso\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' Redefinir', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' 〘texto〙')
handler.tags = ['dono']
handler.command = /^set(menu|help|\.)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limit)
%name (Nama)
%weton (Weton Hari ini)
%week (Hari)
%date (Tanggal)
%time (Jam)
%uptime (Uptime Bot)
%totalreg (Jumlah User yang ada di database)
%npmname
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Kategori)

Bagian Menu Body:
%cmd (Command)
%islimit (Jika command di limit)
`.trim()
