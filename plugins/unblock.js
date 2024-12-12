let handler = async (m, { Verlangid, isCreator, example, Reply, text }) => {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Verlangid.updateBlockStatus(mem, "unblock");
if (m.isGroup) Verlangid.sendMessage(m.chat, {text: `Berhasil membuka memblokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}

handler.command = ["unblock", "unblok"]

module.exports = handler