const net = require('net');
const axios = require('axios');
const { toIDR, sleep } = require('../lib/function');
const { isNullOrUndefined } = require('util');

// Fungsi untuk memvalidasi IPv4
function isValidIPv4(ip) {
  return net.isIPv4(ip);
}
let handler = async (m, { Verlangid, isCreator, isPremium, qtext, text }) => {
        if (m.isGroup) return m.reply("Pembelian lisensi hanya bisa di dalam private chat")
        if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
        let teks = `
 Contoh : *.lic* kode|Produk|IP Address
 Contoh penggunaan : *.lic* 0|cpanel|1.1.1.1
 
 Listlisensi : *.listlisensi*`
        if (!text) return m.reply(teks)
        if (!text.split("|")) return m.reply(example("produk|kode|IP Address"))
        let result = text.split("|")
        if (result.length < 3 || result.some(item => item.trim() === "")) return m.reply(example("produk|kode|IP Address"))
        const specs = {
          "cpanel": {
            "nama": "cPanel",
            "cmd": `bash <( curl ${global.licURL} ) cPanel; ${global.licCMD}CP`,
            "0": 25000
          },
          "cpaneldedicated": {
            "nama": "cPanel Dedicated",
            "cmd": `bash <( curl ${global.licURL} ) cPanel; ${global.licCMD}CP`,
            "0": 90000
          },
          "litespeed": {
            "nama": "LiteSpeed",
            "cmd": `bash <( curl ${global.licURL} ) liteSpeed; ${global.licCMD}LSWS`,
            "0": 75000
          },
          "cloudlinux": {
            "nama": "CloudLinux",
            "cmd": `bash <( curl ${global.licURL} ) CloudLinux; ${global.licCMD}CLN`,
            "0": 75000
          },
          "imunify360": {
            "nama": "Imunify360",
            "cmd": `bash <( curl ${global.licURL} ) Imunify360; ${global.licCMD}Imunify360`,
            "0": 45000
          },
          "softaculous": {
            "nama": "Softaculous",
            "cmd": `bash <( curl ${global.licURL} ) Softaculous; ${global.licCMD}Softaculous`,
            "0": 30000
          },
          "sitepad": {
            "nama": "Sitepad",
            "cmd": `bash <( curl ${global.licURL} ) Sitepad; ${global.licCMD}Sitepad`,
            "0": 45000
          },
          "plesk": {
            "nama": "Plesk",
            "cmd": `bash <( curl ${global.licURL} ) Plesk; ${global.licCMD}Plesk`,
            "0": 50000
          },
          "pleskdedicated": {
            "nama": "Plesk Dedicated",
            "cmd": `bash <( curl ${global.licURL} ) Plesk; ${global.licCMD}Plesk`,
            "0": 60000
          },
          "virtualizor": {
            "nama": "Virtualizor",
            "cmd": `bash <( curl ${global.licURL} ) Virtualizor; ${global.licCMD}Virtualizor`,
            "0": 45000
          },
          "jetbackup": {
            "nama": "JetBackup",
            "cmd": `bash <( curl ${global.licURL} ) JetBackup; ${global.licCMD}JetBackup`,
            "0": 35000
          },
          "whmreseller": {
            "nama": "WHMReseller",
            "cmd": `bash <( curl ${global.licURL} ) WHMReseller; ${global.licCMD}WHMReseller`,
            "0": 45000
          },
          "whmsonic": {
            "nama": "WHMSonic",
            "cmd": `bash <( curl ${global.licURL} ) WHMSonic; ${global.licCMD}WHMSonic`,
            "0": 50000
          },
          "directadmin": {
            "nama": "DirectAdmin",
            "cmd": `bash <( curl ${global.licURL} ) DirectAdmin; ${global.licCMD}DirectAdmin`,
            "0": 25000
          },
          "dareseller": {
            "nama": "DAReseller",
            "cmd": `bash <( curl ${global.licURL} ) DAReseller; ${global.licCMD}DAReseller`,
            "0": 25000
          },
          "osm": {
            "nama": "OSM (Outgoing Spam Monitor)",
            "cmd": `bash <( curl ${global.licURL} ) OSM; ${global.licCMD}OSM`,
            "0": 45000
          },
          "cxs": {
            "nama": "CXS (ConfigServer eXploit Scanner)",
            "cmd": `bash <( curl ${global.licURL} ) CXS; ${global.licCMD}CXS`,
            "0": 50000
          },
          "cpguard": {
            "nama": "CPGuard",
            "cmd": `bash <( curl ${global.licURL} ) CPGuard; ${global.licCMD}CPGuard`,
            "0": 40000
          },
          "whmcs": {
            "nama": "WHMCS",
            "cmd": `Konfirmasi keadmin agar diberi modul dan tutorial!`,
            "0": 25000
          }
        };
        if (!specs[result[1].toLowerCase()]) {
          return m.reply("Produk *"+result[1]+"* tidak ditemukan.");
        }
        if (!specs[result[1].toLowerCase()][result[0]] || !/^[0-9]+$/.test(result[0])) {
          return m.reply("Kode *"+result[0] +"* di *"+result[1].toLowerCase()+"* tidak ditemukan.");
        }
        if (!isValidIPv4(result[2])) {
          return m.reply("Masukkan IP dengan benar.");
        }
        if(result[3] == "lunas" && isCreator){
          var { status: licStatus, data: licData } = await axios.get(`https://api.resellercenter.ir/rc/license.php?token=${global.licTOKEN}&ip=${result[2]}&type=${result[1].toLowerCase()}`)
          if(licStatus !== 200) return m.reply("*Gagal Terhubung ke server Lisensi.*")
          return m.reply(`🔑 *Lisensi ${specs[result[1].toLowerCase()]["nama"]}*

*• IP:* ${result[2]}
*• Jenis:* ${(result[0]==2?"Unlimited (Ganti IP Selama 6 Jam)":(result[0]==1?"1x Ganti IP Selama Lisensi Aktif":(result[0]==0?"Unlimited Ganti IP Selama Lisensi Aktif":"-")))}
*• Status:* ${(licData.ok == "True" ? (licData.message == "License has been activated." ? "oke" : licData.message) : (licData.message.includes("Please charge your account") ? "Saldo habis" : licData.message.includes("Invalid IP address format") ? "Format IP salah" : licData.message.includes("Anti-Abuse system has detect fraud") ? "Anti-Abuse system has detect fraud!" : licData.message.includes("Wrong token") ? "Wrong token" : licData.message.includes("License already exists") ? "IP Terdaftar" : "ERROR!"))}
*• Command:* ${specs[result[1].toLowerCase()]["cmd"]}`);
        }
        
        db.users[m.sender].status_deposit = true
        await Verlangid.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })

        let amount = specs[result[1].toLowerCase()][result[0]]
        const get = await axios.get(`https://pay.epep.my.id/api/create?nominal=${amount}`, { headers: { Authorization: "Bearer " + global.apikeyy } })
        var transactionId = get?.data?.message.split("-")[1].split(".")[0] || 'zzz';
        var nominal = get?.data?.message.split("-")[2].split(".")[0]
        if (transactionId === "zzz" || isNaN(nominal)) return m.reply("Gagal membuat pembayaran.")
        const teks3 = `*▧ INFORMASI PEMBAYARAN*
    
  *• ID :* ${transactionId}
  *• Total Pembayaran :* Rp${await toIDR(nominal)}
  *• Barang :* ${specs[result[1].toLowerCase()]["nama"]}
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
                var paytext = `✔️ *Pembayaran Diterima!*\n
*• Waktu:* ${checkResult.data.date}
*• Ref. ID:* ${checkResult.data.issuer_ref}
*• Sumber:* ${checkResult.data.brand_name + " / " + checkResult.data.buyer_ref.slice(7)}
*• Jumlah:* ${checkResult.data.amount}\n\n`
            var { status: licStatus, data: licData } = await axios.get(`https://api.resellercenter.ir/rc/license.php?token=${global.licTOKEN}&ip=${result[2]}&type=${result[1].toLowerCase()}`)
            await Verlangid.sendMessage(m.chat, { react: { text: '', key: m.key } })
            if(licStatus !== 200) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*GAGAL TERHUBUNG KE SERVER LISENSI!*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;
            if(licData.message.includes("Please charge your account")) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*SALDO RESELLER TIDAK CUKUP ANJAY!*\n\n*Note: Topup bang <_>*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;
            if(licData.message.includes("Invalid IP address format")) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*Pelanggan memasukkan format ipv4 yang salah!*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;
            if(licData.message.includes("Anti-Abuse system has detect fraud")) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*Terdeteksi Penyalahgunaan sistem lisensi!*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;
            if(licData.message.includes("Wrong token")) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*TOKEN RESELLER SALAH!*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;
            if(licData.message.includes("License already exists")) return Verlangid.sendMessage(global.owner+"@s.whatsapp.net", {text: `*IP Telah terdaftar, Gagal mendaftarkan IP!*\n\n*Note: Lakukan renew.*`, contextInfo: { isForwarded: true }}, { quoted: m }),m.reply(paytext+"*Gagal Mendaftarkan Lisensi. Hubungi Admin!*"),delete db.users[m.sender].saweria;

            await Verlangid.sendMessage(m.chat, { text: paytext+`🔑 *Lisensi ${specs[result[1].toLowerCase()]["nama"]}*
*• IP:* ${result[2]}
*• Jenis:* ${(result[1].toLowerCase()=="cpanel"?(result[0]==2?"Unlimited (Ganti IP Selama 6 Jam)":(result[0]==1?"1x Ganti IP Selama Lisensi Aktif":(result[0]==0?"Unlimited Ganti IP Selama Lisensi Aktif":"-"))):result[0]==0?"Unlimited Ganti IP Selama Lisensi Aktif":"-")}
*• Status:* Aktif
*• Command:* ${specs[result[1].toLowerCase()]["cmd"]}` }, { quoted: m })
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

handler.command = ["lic","lisensi","license"]

module.exports = handler