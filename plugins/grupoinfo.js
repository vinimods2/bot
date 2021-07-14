let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 Informação do Grupo 」*\n
*ID:* 
${groupMetadata.id}
*Name:* 
${groupMetadata.subject}
*Description:* 
${groupMetadata.desc}
*Total Members:*
${participants.length} Membros
*Group Owner:* 
@${m.chat.split`-`[0]}
*Group Admins:*
${listAdmin}
*Group Settings:*
${isBanned ? '✅' : '❌'} Banido
${welcome ? '✅' : '❌'} Bem vindo
${detect ? '✅' : '❌'} Detectar
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link
*Configurações de mensagem:*
Bem-vindo: ${sWelcome}
Saidas: ${sBye}
Promovidos: ${sPromote}
Despromovidos: ${sDemote}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrupo']
handler.tags = ['grupo']
handler.command = /^(gru?poinfo|info(gru?po|gc))$/i

handler.group = true

module.exports = handler
