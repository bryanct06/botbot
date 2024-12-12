const fs = require("fs")
const os = require('os');

let handler = async (m, { Verlangid, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Mode :* ${Verlangid.public ? "Public": "Self"}
  • *Creator :* @${global.owner}
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  ┏❐  *⌜ Othermenu ⌟*  ❐
  ┃⭔.cekidch
  ┃⭔.cekidgc
  ┃⭔.readviewonce
  ┗❐
  
  ┏❐  *⌜ Shopmenu ⌟*  ❐
  ┃⭔.buypanel
  ┃⭔.buyadp
  ┗❐
  
  ┏❐  *⌜ Storemenu ⌟*  ❐
  ┃⭔.addrespon
  ┃⭔.delrespon
  ┃⭔.listrespon
  ┃⭔.done
  ┃⭔.proses
  ┃⭔.payment
  ┗❐  
  
  ┏❐  *⌜ Pterodactylmenu ⌟*  ❐
  ┃⭔.1gb
  ┃⭔.2gb
  ┃⭔.3gb
  ┃⭔.4gb
  ┃⭔.5gb
  ┃⭔.6gb
  ┃⭔.7gb
  ┃⭔.8gb
  ┃⭔.9gb
  ┃⭔.10gb
  ┃⭔.unlimited
  ┃⭔.cadmin
  ┃⭔.delpanel
  ┃⭔.deladmin
  ┃⭔.listpanel
  ┃⭔.listadmin
  ┗❐

  
  ┏❐  *⌜ Groupmenu ⌟*  ❐
  ┃⭔.add
  ┃⭔.kick
  ┃⭔.close
  ┃⭔.open
  ┃⭔.hidetag
  ┃⭔.kudetagc
  ┃⭔.leave
  ┃⭔.tagall
  ┃⭔.promote
  ┃⭔.demote
  ┃⭔.resetlinkgc
  ┃⭔.on
  ┃⭔.off
  ┃⭔.linkgc
  ┗❐
  
  ┏❐  *⌜ Ownermenu ⌟*  ❐
  ┃⭔.autoread
  ┃⭔.autopromosi
  ┃⭔.autoreadsw
  ┃⭔.autotyping
  ┃⭔.addplugins
  ┃⭔.listplugins
  ┃⭔.delplugins
  ┃⭔.getplugins
  ┃⭔.saveplugins
  ┃⭔.addowner
  ┃⭔.listowner
  ┃⭔.delowner
  ┃⭔.self/public
  ┃⭔.setimgmenu
  ┃⭔.setimgfake
  ┃⭔.clearsession
  ┃⭔.clearchat
  ┃⭔.resetdb
  ┃⭔.restartbot
  ┃⭔.listgc
  ┃⭔.joingc
  ┃⭔.joinch
  ┗❐
`
await Verlangid.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: true, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menu"]

module.exports = handler