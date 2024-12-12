/* 

=========================================================================

SIMPEL BOT V3
LEAK/SHARE BY VERLANGID
https://www.youtube.com/@ErlanggaWater
jangan ketinggalan konten script lainnya

=========================================================================

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('node-yt-dl');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { OrderKuota } = require("./lib/orderkuota")
const orderkuota = new OrderKuota()
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, encryptCode } = require('./lib/function');
const { isUndefined } = require('util');
const { isNullOrUndefined } = require('util');
const net = require('net');

// Fungsi untuk memvalidasi IPv4
function isValidIPv4(ip) {
  return net.isIPv4(ip);
}

module.exports = Verlangid = async (Verlangid, m, chatUpdate, store) => {
  try {
    await LoadDataBase(Verlangid, m)
    const botNumber = await Verlangid.decodeJid(Verlangid.user.id)
    const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    const budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = "."
    const isCmd = body.startsWith(prefix) ? true : false
    const args = body.trim().split(/ +/).slice(1)
    const getQuoted = (m.quoted || m)
    const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
    const isPremium = premium.includes(m.sender)
    const isCreator = isOwner = [botNumber, owner + "@s.whatsapp.net", ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
    const text = q = args.join(' ')
    const mime = (quoted.msg || quoted).mimetype || ''
    const qmsg = (quoted.msg || quoted)


    //============== [ MESSAGE ] ================================================

    if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

    if (isCmd) {
      console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix + command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] + `\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
    }

    //============= [ FAKEQUOTED ] ===============================================

    const qtext = { key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" }, message: { "extendedTextMessage": { "text": `${prefix + command}` } } }

    const qloc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `${botname2} By ${namaOwner}`, jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) } } }

    const qlocJpm = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: "" } } }

    const qlocPush = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: "" } } }

    const qpayment = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz" } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" } } } }

    const qtoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage": { "mimetype": "image/jpeg", "jpegThumbnail": "" }, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` } } }

    const qlive = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { liveLocationMessage: { caption: `${botname2} By ${namaOwner}`, jpegThumbnail: "" } } }


    //============= [ EVENT GROUP ] ===============================================

    if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

    if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
      try {
        let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
        if (res.data.success) {
          await m.reply(res.data.success)
        }
      } catch (e) { }
    }

    if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
      var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
      if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        var gclink = (`https://chat.whatsapp.com/` + await Verlangid.groupInviteCode(m.chat))
        var isLinkThisGc = new RegExp(gclink, 'i')
        var isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        let delet = m.key.participant
        let bang = m.key.id
        await Verlangid.sendMessage(m.chat, {
          text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]
        }, { quoted: m })
        await Verlangid.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
        await sleep(1000)
        await Verlangid.groupParticipantsUpdate(m.chat, [m.sender], "remove")
      }
    }


    if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
      var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
      if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        var gclink = (`https://chat.whatsapp.com/` + await Verlangid.groupInviteCode(m.chat))
        var isLinkThisGc = new RegExp(gclink, 'i')
        var isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        let delet = m.key.participant
        let bang = m.key.id
        await Verlangid.sendMessage(m.chat, {
          text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]
        }, { quoted: m })
        await Verlangid.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
        /*await sleep(1000)
        await Verlangid.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
      }
    }


    if (m.isGroup && db.settings.autopromosi == true) {
      if (m.text.includes("https://") && !m.fromMe) {
        await Verlangid.sendMessage(m.chat, {
          text: `
*Verlangidzopedia Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s

*👤 Contact Verlangidzopedia*
* *WhatsApp Utama :*
+6285624297893
* *WhtasApp Cadangan :*
+628386890336
https://t.me/Verlangidzodev
`}, { quoted: null })
      }
    }


    if (!isCmd) {
      let check = list.find(e => e.cmd == body.toLowerCase())
      if (check) {
        await m.reply(check.respon)
      }
    }

    //============= [ FUNCTION ] ======================================================

    const example = (teks) => {
      return `\n *Contoh Penggunaan :*\n Ketik *${prefix + command}* ${teks}\n`
    }

    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const Reply = async (teks) => {
      return Verlangid.sendMessage(m.chat, {
        text: teks, mentions: [m.sender], contextInfo: {
          isForwarded: true,
          forwardingScore: 9999,
          businessMessageForwardInfo: { businessOwnerJid: global.owner + "@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran },
          externalAdReply: {
            title: botname,
            body: `© Powered By ${namaOwner}`,
            thumbnail: fs.readFileSync("./src/media/reply.jpg"),
            sourceUrl: null,
          }
        }
      }, { quoted: null })
    }

    const slideButton = async (jid, mention = []) => {
      let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: Verlangid.waUploadToServer })
      const msgii = await generateWAMessageFromContent(jid, {
        ephemeralMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "*All Transaksi Open ✅*\n\n*Verlangidzopedia* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
              }),
              contextInfo: {
                mentionedJid: mention
              },
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: [{
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*Verlangidzopedia Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                },
                {
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                },
                {
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*List Jasa Suntik Sosmed 🌟*

*- Layanan Instagram :*
- 500 Followers : Rp8000
- 1000 Like : Rp4000
- 1000 Views : Rp4000

*- Layanan Tiktok :*
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

*- Layanan Telegram :*
* 500 Member CH : Rp8000

*- Layanan Whats'App :*
* 100 Member CH : Rp12.000

*Syarat & Ketentuan :*
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                }]
              })
            })
          }
        }
      }, { userJid: m.sender, quoted: qlocJpm })
      await Verlangid.relayMessage(jid, msgii.message, { messageId: msgii.key.id })
    }

    const pluginsLoader = async (directory) => {
      let plugins = []
      const folders = fs.readdirSync(directory)
      folders.forEach(file => {
        const filePath = path.join(directory, file)
        if (filePath.endsWith(".js")) {
          try {
            const resolvedPath = require.resolve(filePath);
            if (require.cache[resolvedPath]) {
              delete require.cache[resolvedPath]
            }
            const plugin = require(filePath)
            plugins.push(plugin)
          } catch (error) {
            console.log(`Error loading plugin at ${filePath}:`, error)
          }
        }
      })
      return plugins
    }


    //========= [ COMMANDS PLUGINS ] =================================================
    let pluginsDisable = true
    const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
    const Verlangidzodev = { Verlangid, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber }
    for (let plugin of plugins) {
      if (plugin.command.find(e => e == command.toLowerCase())) {
        pluginsDisable = false
        if (typeof plugin !== "function") return
        await plugin(m, Verlangidzodev)
      }
    }
    if (!pluginsDisable) return

    //============= [ COMMANDS ] ====================================================

    switch (command) {
      case "idgc": case "cekidgc": {
        if (!m.isGroup) return Reply(mess.group)
        m.reply(m.chat)
      }
        break

      //================================================================================

      case "cekidch": case "idch": {
        if (!text) return m.reply(example("linkchnya"))
        if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
        let result = text.split('https://whatsapp.com/channel/')[1]
        let res = await Verlangid.newsletterMetadata("invite", result)
        m.reply("teks")
        let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
        m.reply(teks)
        return m.reply("teks")
      }
        break

      case "rvo": case "readviewonce": {
        if (!m.quoted) return m.reply(example("dengan reply pesannya"))
        let msg = m.quoted.message
        let type = Object.keys(msg)[0]
        if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
          buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
          return Verlangid.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" }, { quoted: m })
        } else if (/image/.test(type)) {
          return Verlangid.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" }, { quoted: m })
        } else if (/audio/.test(type)) {
          return Verlangid.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
        }
      }
        break

      case "add": {
        if (!m.isGroup) return Reply(mess.group)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        if (text) {
          const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
          var onWa = await Verlangid.onWhatsApp(input.split("@")[0])
          if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
          const res = await Verlangid.groupParticipantsUpdate(m.chat, [input], 'add')
          if (Object.keys(res).length == 0) {
            return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
          } else {
            return m.reply(JSON.stringify(res, null, 2))
          }
        } else {
          return m.reply(example("62838###"))
        }
      }
        break

      //================================================================================

      case "kick": case "kik": {
        if (!m.isGroup) return Reply(mess.group)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        if (text || m.quoted) {
          const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
          var onWa = await Verlangid.onWhatsApp(input.split("@")[0])
          if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
          const res = await Verlangid.groupParticipantsUpdate(m.chat, [input], 'remove')
          await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
        } else {
          return m.reply(example("@tag/reply"))
        }
      }
        break

      //================================================================================

      case "leave": {
        if (!isCreator) return Reply(mess.owner)
        if (!m.isGroup) return Reply(mess.group)
        await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
        await sleep(4000)
        await Verlangid.groupLeave(m.chat)
      }
        break

      //================================================================================

      case "resetlinkgc": {
        if (!isCreator) return Reply(mess.owner)
        if (!m.isGroup) return Reply(mess.group)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        await Verlangid.groupRevokeInvite(m.chat)
        m.reply("Berhasil mereset link grup ✅")
      }
        break

      //================================================================================

      case "tagall": {
        if (!m.isGroup) return Reply(mess.group)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (!text) return m.reply(example("pesannya"))
        let teks = text + "\n\n"
        let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
        await member.forEach((e) => {
          teks += `@${e.split("@")[0]}\n`
        })
        await Verlangid.sendMessage(m.chat, { text: teks, mentions: [...member] }, { quoted: m })
      }
        break

      //================================================================================

      case "linkgc": {
        if (!m.isGroup) return Reply(mess.group)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        const urlGrup = "https://chat.whatsapp.com/" + await Verlangid.groupInviteCode(m.chat)
        var teks = `
${urlGrup}
`
        await Verlangid.sendMessage(m.chat, { text: teks, matchedText: `${urlGrup}` }, { quoted: m })
      }
        break

      //================================================================================

      case "ht": case "hidetag": {
        if (!m.isGroup) return Reply(mess.group)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (!text) return m.reply(example("pesannya"))
        let member = m.metadata.participants.map(v => v.id)
        await Verlangid.sendMessage(m.chat, { text: text, mentions: [...member] }, { quoted: m })
      }
        break

      //================================================================================

      case "joingc": case "join": {
        if (!isCreator) return Reply(mess.owner)
        if (!text) return m.reply(example("linkgcnya"))
        if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
        let result = text.split('https://chat.whatsapp.com/')[1]
        let id = await Verlangid.groupAcceptInvite(result)
        m.reply(`Berhasil bergabung ke dalam grup ${id}`)
      }
        break

      case "joinch": case "joinchannel": {
        if (!isCreator) return Reply(mess.owner)
        if (!text && !m.quoted) return m.reply(example("linkchnya"))
        if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
        let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
        let res = await Verlangid.newsletterMetadata("invite", result)
        await Verlangid.newsletterFollow(res.id)
        m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
      }
        break


      //================================================================================

      case "closegc": case "close":
      case "opengc": case "open": {
        if (!m.isGroup) return Reply(mess.group)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (/open|opengc/.test(command)) {
          if (m.metadata.announce == false) return
          await Verlangid.groupSettingUpdate(m.chat, 'not_announcement')
        } else if (/closegc|close/.test(command)) {
          if (m.metadata.announce == true) return
          await Verlangid.groupSettingUpdate(m.chat, 'announcement')
        } else { }
      }
        break

      //================================================================================

      case "demote":
      case "promote": {
        if (!m.isGroup) return Reply(mess.group)
        if (!m.isBotAdmin) return Reply(mess.botAdmin)
        if (!isCreator && !m.isAdmin) return Reply(mess.admin)
        if (m.quoted || text) {
          var action
          let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          if (/demote/.test(command)) action = "Demote"
          if (/promote/.test(command)) action = "Promote"
          await Verlangid.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
            await Verlangid.sendMessage(m.chat, { text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target] }, { quoted: m })
          })
        } else {
          return m.reply(example("@tag/6285###"))
        }
      }
        break

      //================================================================================

      case "cadmin": {
        if (!isCreator) return Reply(mess.owner)
        if (!text) return m.reply(example("username"))
        let username = text.toLowerCase()
        let email = username + "@gmail.com"
        let name = capital(args[0])
        let password = username + crypto.randomBytes(2).toString('hex')
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
          })
        })
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
        let user = data.attributes
        var orang
        if (m.isGroup) {
          orang = m.sender
          await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
        } else {
          orang = m.chat
        }
        var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
        await Verlangid.sendMessage(orang, { text: teks }, { quoted: m })
      }
        break

      //================================================================================

      case "addrespon": {
        if (!isCreator) return Reply(mess.owner)
        if (!text) return m.reply(example("cmd|responnya"))
        if (!text.split("|")) return m.reply(example("cmd|responnya"))
        let result = text.split("|")
        if (result.length < 2) return m.reply(example("cmd|responnya"))
        const [cmd, respon] = result
        let res = list.find(e => e.cmd == cmd.toLowerCase())
        if (res) return m.reply("Cmd respon sudah ada")
        let obj = {
          cmd: cmd.toLowerCase(),
          respon: respon
        }
        list.push(obj)
        fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
        m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
      }
        break

      //================================================================================

      case "delrespon": {
        if (!isCreator) return Reply(mess.owner)
        if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
        const cmd = text.toLowerCase()
        let res = list.find(e => e.cmd == cmd.toLowerCase())
        if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
        let position = list.indexOf(res)
        await list.splice(position, 1)
        fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
        m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
      }
        break

      //================================================================================

      case "listrespon": {
        if (!isCreator) return Reply(mess.owner)
        if (list.length < 1) return m.reply("Tidak ada cmd respon")
        let teks = "\n *#- List all cmd response*\n"
        await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
        m.reply(`${teks}`)
      }
        break

      //================================================================================

      case "addprem": case "addpremium": {
        if (!isCreator) return Reply(mess.owner)
        if (!text && !m.quoted) return m.reply(example("6285###"))
        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
        const input2 = input.split("@")[0]
        if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
        premium.push(input)
        await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
        m.reply(`Berhasil menambah premium ✅`)
      }
        break

      //================================================================================

      case "listpremium": case "listprem": {
        if (premium.length < 1) return m.reply("Tidak ada user premium")
        let teks = `\n *#- List all user premium*\n`
        for (let i of premium) {
          teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
        }
        Verlangid.sendMessage(m.chat, { text: teks, mentions: premium }, { quoted: m })
      }
        break

      //================================================================================

      case "delpremium": case "delprem": {
        if (!isCreator) return Reply(mess.owner)
        if (!m.quoted && !text) return m.reply(example("6285###"))
        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
        const input2 = input.split("@")[0]
        if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
        if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
        let posi = premium.indexOf(input)
        await premium.splice(posi, 1)
        await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
        m.reply(`Berhasil menghapus premium ✅`)
      }
        break

      case "buypanel": {
        if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
        if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
        let teks = `
 *#- List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.buypanel* 1gb|username
`
        if (!text) return m.reply(teks)
        let result = text.split("|")
        if (result.length < 2) return m.reply(example("1gb|username"))
        var [xcmd, usern] = result
        if (usern.length < 3) return m.reply("Username minimal 3 digit!")
        let Obj = {}
        let cmd = xcmd.toLowerCase()
        if (cmd == "1gb") {
          Obj.ram = "1000"
          Obj.disk = "1000"
          Obj.cpu = "40"
          Obj.harga = "10"
        } else if (cmd == "2gb") {
          Obj.ram = "2000"
          Obj.disk = "1000"
          Obj.cpu = "60"
          Obj.harga = "2000"
        } else if (cmd == "3gb") {
          Obj.ram = "3000"
          Obj.disk = "2000"
          Obj.cpu = "80"
          Obj.harga = "3000"
        } else if (cmd == "4gb") {
          Obj.ram = "4000"
          Obj.disk = "2000"
          Obj.cpu = "100"
          Obj.harga = "4000"
        } else if (cmd == "5gb") {
          Obj.ram = "5000"
          Obj.disk = "3000"
          Obj.cpu = "120"
          Obj.harga = "5000"
        } else if (cmd == "6gb") {
          Obj.ram = "6000"
          Obj.disk = "3000"
          Obj.cpu = "140"
          Obj.harga = "6000"
        } else if (cmd == "7gb") {
          Obj.ram = "7000"
          Obj.disk = "4000"
          Obj.cpu = "160"
          Obj.harga = "7000"
        } else if (cmd == "8gb") {
          Obj.ram = "8000"
          Obj.disk = "4000"
          Obj.cpu = "180"
          Obj.harga = "8000"
        } else if (cmd == "9gb") {
          Obj.ram = "9000"
          Obj.disk = "5000"
          Obj.cpu = "200"
          Obj.harga = "9000"
        } else if (cmd == "10gb") {
          Obj.ram = "10000"
          Obj.disk = "5000"
          Obj.cpu = "220"
          Obj.harga = "10000"
        } else if (cmd == "unli" || cmd == "unlimited") {
          Obj.ram = "0"
          Obj.disk = "0"
          Obj.cpu = "0"
          Obj.harga = "11000"
        } else return m.reply(teks)
        db.users[m.sender].status_deposit = true
        await Verlangid.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })

        const UrlQr = global.qrisOrderKuota

        function generateRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let amount = Number(Obj.harga)
        const get = await axios.get(`https://pay.epep.my.id/api/create?nominal=${amount}`, { headers: { Authorization: "Bearer " + global.apikeyy } })
        var transactionId = get?.data?.message.split("-")[1].split(".")[0] || 'zzz';
        var nominal = get?.data?.message.split("-")[2].split(".")[0]
        if (transactionId === "zzz" || isNaN(nominal)) return m.reply("Gagal membuat pembayaran.")
        const teks3 = `*▧ INFORMASI PEMBAYARAN*
  
*• ID :* ${transactionId}
*• Total Pembayaran :* Rp${await toIDR(nominal)}
*• Barang :* Panel Pterodactyl
*• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
        let msgQr = await Verlangid.sendMessage(m.chat, { image: { url: get.data.message }, caption: teks3 }, { quoted: m })
        db.users[m.sender].saweria = {
          msg: msgQr,
          chat: m.sender,
          idDeposit: transactionId,
          amount: nominal.toString()
        }


        const startTime = Date.now();

        const interval = setInterval(async () => {
          if (db.users[m.sender].status_deposit == false) {
            clearInterval(interval);
          }
          if (Date.now() - startTime > 5 * 60 * 1000) {
            clearInterval(interval);
            await Verlangid.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg })
            await sleep(500);
            await Verlangid.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
            db.users[m.sender].status_deposit = false
            delete db.users[m.sender].saweria
          }

          try {
            const { status: checkStatus, data: checkResult } = await axios.get(`https://pay.epep.my.id/api/check?id=${transactionId}`, { headers: { Authorization: "Bearer " + global.apikeyy } });

            if (checkStatus === 200) {
              if (checkResult?.message === '[-_-]' && db.users[m.sender].saweria) {
                clearInterval(interval);
                console.log("[2] ", checkStatus, checkResult)
                db.users[m.sender].status_deposit = false
                await Verlangid.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
                await sleep(500);
                await Verlangid.sendMessage(db.users[m.sender].saweria.chat, {
                  text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*
              
*• ID :* ${db.users[m.sender].saweria.idDeposit}
*• Total Pembayaran :* ${checkResult.data.amount}
*• Barang :* Panel Pterodactyl
*• Dari :* ${checkResult.data.brand_name + " / " + checkResult.data.buyer_ref.slice(7)}
*• No Referensi :* ${checkResult.data.issuer_ref}
*• Tanggal :* ${checkResult.data.date}
              `}, { quoted: db.users[m.sender].saweria.msg })
                let username = usern + "-" + crypto.randomBytes(1).toString('hex')
                let email = username + "@gmail.com"
                let name = capital(username) + " Server"
                let password = username + crypto.randomBytes(2).toString('hex')
                let f = await fetch(domain + "/api/application/users", {
                  "method": "POST",
                  "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                  },
                  "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Server",
                    "language": "en",
                    "password": password.toString()
                  })
                })
                let data = await f.json();
                if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
                let user = data.attributes
                let desc = tanggal(Date.now())
                let usr_id = user.id
                let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
                  "method": "GET",
                  "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                  }
                })
                let data2 = await f1.json();
                let startup_cmd = data2.attributes.startup
                let f2 = await fetch(domain + "/api/application/servers", {
                  "method": "POST",
                  "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                  },
                  "body": JSON.stringify({
                    "name": name,
                    "description": desc,
                    "user": usr_id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                      "INST": "npm",
                      "USER_UPLOAD": "0",
                      "AUTO_UPDATE": "0",
                      "CMD_RUN": "npm start"
                    },
                    "limits": {
                      "memory": Obj.ram,
                      "swap": 0,
                      "disk": Obj.disk,
                      "io": 500,
                      "cpu": Obj.cpu
                    },
                    "feature_limits": {
                      "databases": 5,
                      "backups": 5,
                      "allocations": 5
                    },
                    deploy: {
                      locations: [parseInt(loc)],
                      dedicated_ip: false,
                      port_range: [],
                    },
                  })
                })
                let result = await f2.json()
                if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
                let server = result.attributes
                var orang = db.users[m.sender].saweria.chat
                var tekspanel = `
*Berhasil Membuat Akun Panel ✅*
              
* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0, 2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu + "%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0, 2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan
              
*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
              `
                await Verlangid.sendMessage(m.chat, { react: { text: '', key: m.key } })
                await Verlangid.sendMessage(orang, { text: tekspanel }, { quoted: null })
                delete db.users[m.sender].saweria
              }
            }
          } catch (error) {
            if (error?.response?.data?.error === "Expired!") {
              clearInterval(interval);
              await Verlangid.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg })
              await sleep(500);
              await Verlangid.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
              db.users[m.sender].status_deposit = false
              delete db.users[m.sender].saweria
              return;
            }
            if (isNullOrUndefined(error.response?.data)) return console.log(error)
            console.error('Error during check:', error.response?.data);
          }
        }, 5000);
      }
        break

      case "batalbeli": {
        if (m.isGroup) return
        if (db.users[m.sender].status_deposit == false) return
        db.users[m.sender].status_deposit = false
        if ('saweria' in db.users[m.sender]) {
          await Verlangid.sendMessage(m.chat, { text: "Berhasil membatalkan pembelian ✅" }, { quoted: db.users[m.sender].saweria.msg })
          await Verlangid.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
          // await clearInterval(db.users[m.sender].saweria.exp)
          delete db.users[m.sender].saweria
        } else {
          await m.reply("Berhasil membatalkan pembelian ✅")
        }
      }
        break

      //================================================================================

      case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
        if (!isCreator && !isPremium) return Reply(mess.owner)
        if (!text) return m.reply(example("username"))
        const specs = {
          "1gb": { ram: "1000", disknya: "1000", cpu: "40" },
          "2gb": { ram: "2000", disknya: "1000", cpu: "60" },
          "3gb": { ram: "3000", disknya: "2000", cpu: "80" },
          "4gb": { ram: "4000", disknya: "2000", cpu: "100" },
          "5gb": { ram: "5000", disknya: "3000", cpu: "120" },
          "6gb": { ram: "6000", disknya: "3000", cpu: "140" },
          "7gb": { ram: "7000", disknya: "4000", cpu: "160" },
          "8gb": { ram: "8000", disknya: "4000", cpu: "180" },
          "9gb": { ram: "9000", disknya: "5000", cpu: "200" },
          "10gb": { ram: "10000", disknya: "5000", cpu: "220" },
          "unlimited": { ram: "0", disknya: "0", cpu: "0" },
          "unli": { ram: "0", disknya: "0", cpu: "0" },
        };
        global.panel = text
        const { ram, disknya, cpu } = specs[command] || { ram: "0", disknya: "0", cpu: "0" };

        const username = global.panel.toLowerCase();
        const email = `${username}@gmail.com`;
        const name = `${capital(username)} Server`;
        const password = username + crypto.randomBytes(2).toString("hex");

        try {
          const userResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
              email,
              username: username.toLowerCase(),
              first_name: name,
              last_name: "Server",
              language: "en",
              password: password.toString(),
            }),
          });
          const userData = await userResponse.json();
          if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));

          const user = userData.attributes;
          const desc = tanggal(Date.now());
          const usr_id = user.id;

          const eggResponse = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${apikey}`,
            },
          });
          const eggData = await eggResponse.json();
          const startup_cmd = eggData.attributes.startup;

          const serverResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
              name,
              description: desc,
              user: usr_id,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk: disknya,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
          const serverData = await serverResponse.json();
          if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));

          const server = serverData.attributes;
          const recipient = m.isGroup ? m.sender : m.chat;

          const teks = `
*Berhasil Membuat Akun Panel ✅*
      
*ID Server :* ${server.id}
*Nama :* ${name}
*Username :* ${user.username}
*Password :* ${password}
*Login :* ${global.domain}
*Ram :* ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"}
*Cpu :* ${cpu === "0" ? "Unlimited" : cpu + "%"}
*Disk :* ${disknya === "0" ? "Unlimited" : disknya / 1000 + "GB"}
*Expired Server :* 1 Bulan
      
*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
      `;
          await Verlangid.sendMessage(recipient, { text: teks }, { quoted: m });
          delete global.panel;
        } catch (err) {
          console.error(err);
          m.reply("Terjadi kesalahan saat membuat server.");
        }
      }
        break

      //================================================================================

      case "listadmin": {
        if (!isCreator && !isPremium) return Reply(mess.owner)
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        if (users.length < 1) return m.reply("Tidak ada admin panel")
        var teks = "\n *#- List admin panel pterodactyl*\n"
        await users.forEach((i) => {
          if (i.attributes.root_admin !== true) return
          teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
        })
        await Verlangid.sendMessage(m.chat, { text: teks }, { quoted: m })
      }
        break

      //================================================================================

      case "listpanel": case "listp": case "listserver": {
        if (!isCreator && !isPremium) return Reply(mess.owner)
        let f = await fetch(domain + "/api/application/servers?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        });
        let res = await f.json();
        let servers = res.data;
        if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
        let messageText = "\n *#- List server panel pterodactyl*\n"
        for (let server of servers) {
          let s = server.attributes
          let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + capikey
            }
          })
          let data = await f3.json();
          let status = data.attributes ? data.attributes.current_state : s.status;
          messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0, 2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
        }
        await Verlangid.sendMessage(m.chat, { text: messageText }, { quoted: m })
      }
        break

      //================================================================================

      case "deladmin": {
        if (!isCreator) return Reply(mess.owner)
        if (!text) return m.reply(example("idnya"))
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        let getid = null
        let idadmin = null
        await users.forEach(async (e) => {
          if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
            getid = e.attributes.username
            idadmin = e.attributes.id
            let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
              }
            })
            let res = delusr.ok ? {
              errors: null
            } : await delusr.json()
          }
        })
        if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
        await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
      }
        break

      //================================================================================

      case "delpanel": {
        if (!isCreator && !isPremium) return Reply(mess.owner)
        if (!text) return m.reply(example("idnya"))
        let f = await fetch(domain + "/api/application/servers?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let result = await f.json()
        let servers = result.data
        let sections
        let nameSrv
        for (let server of servers) {
          let s = server.attributes
          if (Number(text) == s.id) {
            sections = s.name.toLowerCase()
            nameSrv = s.name
            let f = await fetch(domain + `/api/application/servers/${s.id}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
              }
            })
            let res = f.ok ? {
              errors: null
            } : await f.json()
          }
        }
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        for (let user of users) {
          let u = user.attributes
          if (u.first_name.toLowerCase() == sections) {
            let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
              }
            })
            let res = delusr.ok ? {
              errors: null
            } : await delusr.json()
          }
        }
        if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
        m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
      }
        break

      case "dana": {
        if (!isCreator) return
        let teks = `
*PAYMENT DANA VerlangidZOPEDIA*

* *Nomor :* 085624297893
* *Atas Nama :* M** H****

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
        await Verlangid.sendMessage(m.chat, { text: teks }, { quoted: qtoko })
      }
        break

      //================================================================================

      case "qris": {
        if (!isCreator) return
        await Verlangid.sendMessage(m.chat, { image: { url: global.qris }, caption: "\n*PAYMENT QRIS VerlangidZOPEDIA*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`" }, { quoted: qtoko })
      }
        break

      case "proses": {
        if (!isCreator) return Reply(mess.owner)
        if (!q) return m.reply(example("jasa install panel"))
        const msg = {
          text: `*Dana Masuk ✅*
📦 ${text}

_*© 2024 - Verlangidzopedia*_`
        }
        await Verlangid.sendMessage(m.chat, msg, { quoted: null })
      }
        break

      //================================================================================

      case "done": {
        if (!isCreator) return Reply(mess.owner)
        if (!q) return m.reply(example("jasa install panel"))
        const msg = {
          text: `*Transaksi Done ✅*
📦 ${text}

_*© 2024 - Verlangidzopedia*_`
        }
        await Verlangid.sendMessage(m.chat, msg, { quoted: null })
      }
        break


      //================================================================================

      case "developerbot": case "owner": {
        await Verlangid.sendContact(m.chat, [global.owner], m)
      }
        break

      //================================================================================

      case "save": case "sv": {
        if (!isCreator) return
        await Verlangid.sendContact(m.chat, [m.chat.split("@")[0]], m)
      }
        break

      //================================================================================

      case "self": {
        if (!isCreator) return
        Verlangid.public = false
        m.reply("Berhasil mengganti ke mode *self*")
      }
        break

      //================================================================================

      case "ping": case "uptime": {
        if (!isCreator) return
        let timestamp = speed();
        let latensi = speed() - timestamp;
        let tio = await nou.os.oos();
        var tot = await nou.drive.info();
        let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
        await m.reply(respon)
      }
        break

      //================================================================================

      case "public": {
        if (!isCreator) return
        Verlangid.public = true
        m.reply("Berhasil mengganti ke mode *public*")
      }
        break

      //================================================================================

      case "restart": case "rst": {
        if (!isCreator) return Reply(mess.owner)
        await m.reply("Memproses _restart server_ . . .")
        var file = await fs.readdirSync("./session")
        var anu = await file.filter(i => i !== "creds.json")
        for (let t of anu) {
          await fs.unlinkSync(`./session/${t}`)
        }
        await process.send('reset')
      }
        break

      case "resetdb": case "rstdb": {
        if (!isCreator) return Reply(mess.owner)
        for (let i of Object.keys(global.db)) {
          global.db[i] = {}
        }
        m.reply("Berhasil mereset database ✅")
      }
        break

      //================================================================================

      case "setimgmenu": {
        if (!isCreator) return Reply(mess.owner)
        if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
        await Verlangid.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
        await m.reply("Berhasil mengganti image menu ✅")
      }
        break

      //================================================================================

      case "setimgfake": {
        if (!isCreator) return Reply(mess.owner)
        if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
        await Verlangid.downloadAndSaveMediaMessage(qmsg, "./src/media/fake.jpg", false)
        await m.reply("Berhasil mengganti image fake ✅")
      }
        break

      //================================================================================

      case "clearchat": case "clc": {
        if (!isCreator) return Reply(mess.owner)
        Verlangid.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat)
      }
        break

      //================================================================================

      case "listowner": case "listown": {
        if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
        let teks = `\n *#- List all owner tambahan*\n`
        for (let i of owners) {
          teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
        }
        Verlangid.sendMessage(m.chat, { text: teks, mentions: owners }, { quoted: m })
      }
        break

      //================================================================================

      case "delowner": case "delown": {
        if (!isCreator) return Reply(mess.owner)
        if (!m.quoted && !text) return m.reply(example("6285###"))
        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
        const input2 = input.split("@")[0]
        if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
        if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
        let posi = owners.indexOf(input)
        await owners.splice(posi, 1)
        await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
        m.reply(`Berhasil menghapus owner ✅`)
      }
        break

      //================================================================================

      case "addowner": case "addown": {
        if (!isCreator) return Reply(mess.owner)
        if (!m.quoted && !text) return m.reply(example("6285###"))
        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
        const input2 = input.split("@")[0]
        if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
        owners.push(input)
        await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
        m.reply(`Berhasil menambah owner ✅`)
      }
        break

      //================================================================================

      default:
        if (budy.startsWith('>')) {
          if (!isCreator) return
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await m.reply(evaled)
          } catch (err) {
            await m.reply(String(err))
          }
        }

        //================================================================================

        if (m.text.toLowerCase() == "bot") {
          m.reply("Bot Online ✅")
        }

        //================================================================================

        if (budy.startsWith('=>')) {
          if (!isCreator) return
          try {
            let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await m.reply(evaled)
          } catch (err) {
            await m.reply(String(err))
          }
        }

        //================================================================================

        if (budy.startsWith('$')) {
          if (!isCreator) return
          if (!text) return
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`)
            if (stdout) return m.reply(stdout)
          })
        }

      //================================================================================
    }
  } catch (err) {
    console.log(util.format(err));
    Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {
      text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }
    }, { quoted: m })
  }
}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
});