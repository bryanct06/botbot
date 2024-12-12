/* 

=========================================================================

SIMPEL BOT V3
LEAK/SHARE BY VERLANGID
https://www.youtube.com/@ErlanggaWater
jangan ketinggalan konten script lainnya    
  

=========================================================================

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = '6283192830198'
global.versi = "0.0.3"
global.namaOwner = "IDPrideHost"
global.packname = 'Bot WhatsApp'
global.botname = 'IDPrideHost Bot'
global.botname2 = 'IDPrideHost'
global.apikeyy = 'KadalKayang' //apikey pay.epep.my.id
global.licTOKEN = '2a475dd642f451078bb33946841ba38b' //token lisensi
global.licCMD = 'IDP' //prefix command lisensi
global.licURL = 'https://idpride.host/pre.sh' //url command lisensi

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6283192830198"
global.linkGrup = "https://chat.whatsapp.com/FRh0IlSsc7qAzX6nE7WwQP"
global.linkGrup2 = ""

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://wa.me/xxx"
global.idSaluran = "120363144038483540@newsletter"
global.namaSaluran = "Skyzopedia [ Testimoni ]"

global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

// Settings All Payment
global.dana = "085624297893"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"
global.qris = "https://telegra.ph/file/341991386cb6ce161c2fc.jpg"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "xxx"
global.apikey = "xxx" //ptla
global.capikey = "xxx" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "xxx"
global.apikeyV2 = "xxx" //ptla
global.capikeyV2 = "xxx" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
