let handler = async (m, { Verlangid, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
╭─ *[ LIST PRODUK LISENSI ]*
│
│ • *\`cPanel\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 25k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│            
│ • *\`cPanelDedicate\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 90k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`LiteSpeed\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 75k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`CloudLinux\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 75k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Imunify360\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 45k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Softaculous\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 30k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Sitepad\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 45k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Plesk\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 50k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`PleskDedicated\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 60k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Virtualizor\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 45k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`Jetbackup\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 35k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`WHMReseller\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 45k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`WHMSonic\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 50k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`DirectAdmin\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 25k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`OSM\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 45k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`CXS\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 50k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`CPGuard\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 40k
│            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
│
│ • *\`WHMCS\`*
│      *↳ Kode:* 0
│          *↳ Harga:* 25k
╰            *↳ Desk:* Lisensi unlimited ganti ip selama lisensi aktif
`
m.reply(teksnya)
}

handler.command = ["listlisensi"]

module.exports = handler