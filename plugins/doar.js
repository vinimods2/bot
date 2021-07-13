let handler = async m => m.reply(`
╭─「 DOAÇAO 」
│ • ＶＩＮＩＭＯＤＳ [https://wa.me/5514997239463]
│ • Pix henriquevinicius511@gmail.com [NUBANK]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['doar']
handler.tags = ['dono']
handler.command = /^doar(|)$/i

module.exports = handler
