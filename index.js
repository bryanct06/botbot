/* 

  #- Credits By Skyzopedia
    • Contact: 6285624297893
    • YouTube: @skyzodev
    
    
  ====== [ Recode By ] ======
    • Skyzo
    • Namalu


  [ !! ] JANGAN HAPUS CREDITS, HARGAI DEVELOPER!! Tambahin Aja Namalu

*/



require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
const PhoneNumber = require('awesome-phonenumber');
let groupBot = "https://chat.whatsapp.com/FvM560WfboEL2Kk4VXs60p"
const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const yangBacaHomo = [`
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
`, `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`, `
⣿⡇⠘⡇⢀⣶⣶⠄⠈⣾⡟⢂⣿⣿⣿⣿⣿⣿⡿⢉⢾⢃⣿⣿⡟⣸⢸⣿⣿⣸
⣿⢸⣦⢧⢸⣿⣿⢱⠄⠄⣇⣼⣿⣿⣿⣿⣿⢟⣼⣿⡯⠸⣿⢳⢱⡏⣼⣿⢇⣿
⡏⣾⢽⣼⢸⣿⣿⡘⣆⢀⠛⣿⣿⣿⣿⡿⣫⣾⣿⣿⢇⣿⠂⢌⡾⡇⣿⡿⢸⣿
⢧⣿⠄⢹⢸⣿⣿⣷⣭⢸⡄⣿⣿⣿⢋⣵⣿⣿⡿⠟⡨⡡⠄⣾⣿⡆⣭⡇⣿⣿
⣼⡏⡀⠄⢀⢿⣿⣿⡟⣾⡇⣿⡿⣡⢁⣿⣿⣫⡶⢃⡵⣡⣿⣮⡻⡇⣿⢸⣮⢿
⣿⡇⣧⢠⠸⡎⡍⡭⢾⡏⣧⢋⢾⠏⣼⣿⣿⠿⣵⣾⣕⠿⣿⣿⣷⢡⠏⣾⣿⣿
⣿⠁⣿⠈⠄⠄⢃⢹⡀⠸⢸⢿⠸⢰⢻⢿⣟⢁⣀⠄⠄⠉⠒⢝⢿⠸⣴⣿⣿⣿
⡍⠇⣿⣷⢰⢰⢸⠄⡃⡆⠈⠈⡀⡌⠠⠸⠃⣿⣏⡳⢷⢄⡀⠄⠄⠰⣿⣿⣿⣿
⡇⠄⠸⣿⢸⣿⣶⡄⣇⠃⡇⡄⡇⠁⠃⠄⠈⢊⠻⠿⣿⣿⣿⣦⠄⠘⣿⣿⣿⣿
⡇⠄⠄⢻⣸⣿⣿⠏⡙⢸⣇⣡⢰⢀⠄⠄⠄⠈⡁⢱⢈⢿⣿⡿⡄⣰⣶⣿⣿⣿
⡇⠄⠄⠄⢻⣿⡿⢰⡇⠆⠲⠶⣝⠾⠸⢴⢠⠄⠇⢸⢸⠄⡶⡜⣽⣿⣿⣿⣿⢏
⠁⠄⠄⠄⠄⢿⡇⠧⢣⣸⣦⣄⣀⠁⠓⢸⣄⠸⢀⠄⡀⡀⡪⣽⣿⣿⢿⣿⢟⣬
⠄⠄⠄⠄⠄⠈⢧⠯⢸⣿⣿⣿⡿⠰⣷⠄⣿⣇⡿⠄⡀⠦⣰⣿⡿⣱⣿⡏⢾⣫
⠄⠄⠄⠄⠄⠄⠈⣌⢌⢿⣿⣿⠇⠼⢃⢠⢇⣻⣧⣿⡡⣸⣿⠿⢁⡟⢁⣳⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠳⢝⣒⣒⠰⣘⣴⡧⠿⣿⣛⡯⣱⡿⣫⢎⣪⣎⣿⣧⢻⠿
`, `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`, `
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
`, `
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`, `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const DataBase = require('./src/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			game: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 5000)
})();

const { MessagesUpsert, Solving } = require('./src/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/function');

async function startingBot() {
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestWaWebVersion()
	const msgRetryCounterCache = new NodeCache()
	
	const Client = WAConnection({
		isLatest, 
        printQRInTerminal: !pairingCode, 
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ["Ubuntu", "Chrome", "91.0.4472.124"],
        generateHighQualityLinkPreview: true,                
    	getMessage: async (key) => {
         if (store) {
           const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
           return msg?.message || undefined
         }
           return {
          conversation: 'WhatsApp Bot By Skyzopedia'
         }}		
	})
	
	if (pairingCode && !

Client.authState.creds.registered) {
	say("Simple - Botz", {
            font: 'tiny',
            align: 'left',
            gradient: [randomcolor, randomcolor]
        });
        say("### Created By Skyzo ###\n • Youtube : skyzoe\n • Telegram : skyzodev", {
            font: 'console',
            align: 'left',
            gradient: [randomcolor, randomcolor]
        });
		let phoneNumber;
		async function getPhoneNumber() {
			phoneNumber = await question(chalk.black(chalk.cyan.bold(`${imageAscii}\n\n[!] Masukan Nomor WhatsApp\n`)))
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		}
		
		setTimeout(async () => {
			await getPhoneNumber()
			await exec('rm -rf ./session/*')
			let code = await Client.requestPairingCode(phoneNumber);
			code = code.match(/.{1,4}/g).join(" - ") || code
			console.log(chalk.cyan.bold(`Kode Pairing Kamu :`), chalk.white.bold(code))
		}, 3000)
	}
	
	await store.bind(Client.ev)
	
	await Solving(Client, store)
	
	

Client.ev.on('creds.update', saveCreds)
	
	

Client.ev.on('connection.update', async (update) => {
		const { connection, lastDisconnect, receivedPendingNotifications } = update
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connection to Server Lost, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connection closed, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Restart Required...');
				startingBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Connection Timed Out, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Delete Session and Scan again...');
				startingBot()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Close current Session first...');
				startingBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.Multidevicemismatch) {
				console.log('Scan again...');
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				

Client.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open') {
// Client.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 50, 53, 55, 48, 51, 51, 57, 56, 56, 52, 57, 54, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114))		
Client.sendMessage(

Client.user.id.split(":")[0] + "@s.whatsapp.net", {text: "Simple Botz Connected"})
			console.log(chalk.cyan.bold("Berhasil Tersambung ✓"));
		} else if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
		}
	});
	
Client.ev.on('messages.upsert', async (message) => {
		await MessagesUpsert(Client, message, store);
});

Client.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = 

Client.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
	});
	
	

Client.ev.on('call', async (call) => {
console.log(call)
});
	
	

Client.ev.on('group-participants.update', async (update) => {
//console.log(update)
const { id, author, participants, action } = update
	try {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
      }
    }
  }
  if (global.db.groups[id] && global.db.groups[id].welcome == true) {
    const metadata = await Client.groupMetadata(id)
    let teks
    for(let n of participants) {
      let profile;
      try {
        profile = await Client.profilePictureUrl(n, 'image');
      } catch {
        profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
      }
      let imguser = await prepareWAMessageMedia({
        image: {
          url: profile
        }
      }, {
        upload: Client.waUploadToServer
      })
      if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
        let asu = await Client.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        let msgii = await generateWAMessageFromContent(id, {
          viewOnceMessageV2Extension: {
            message: {
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [author, n],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: global.botname,
                    newsletterJid: global.idChannel
                  }
                },
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Welcome @${n.split("@")[0]}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  ...imguser
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Welcome\",\"title\":\"Welcome\",\"id\":\"a\"}"
                  }]
                })
              })
            }
          }
        }, {
          userJid: n,
          quoted: qtext
        })
        await Client.relayMessage(id, msgii.message, {
          messageId: msgii.key.id
        })
      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
        let asu = await Client.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        let msgii = await generateWAMessageFromContent(id, {
          viewOnceMessageV2Extension: {
            message: {
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [author, n],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: global.botname,
                    newsletterJid: global.idChannel
                  }
                },
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Goodbye @${n.split("@")[0]}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  ...imguser
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Goodbye\",\"title\":\"Goodbye\",\"id\":\"a\"}"
                  }]
                })
              })
            }
          }
        }, {
          userJid: n,
          quoted: qtext
        })
        await Client.relayMessage(id, msgii.message, {
          messageId: msgii.key.id
        })
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Client.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        let msgii = await generateWAMessageFromContent(id, {
          viewOnceMessageV2Extension: {
            message: {
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [author, n],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: global.botname,
                    newsletterJid: global.idChannel
                  }
                },
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Promote @${n.split("@")[0]}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  ...imguser
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Promote\",\"title\":\"Promote\",\"id\":\"a\"}"
                  }]
                })
              })
            }
          }
        }, {
          userJid: n,
          quoted: qtext
        })
        await Client.relayMessage(id, msgii.message, {
          messageId: msgii.key.id
        })
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Client.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        let msgii = await generateWAMessageFromContent(id, {
          viewOnceMessageV2Extension: {
            message: {
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [author, n],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: global.botname,
                    newsletterJid: global.idChannel
                  }
                },
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Demote @${n.split("@")[0]}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  ...imguser
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": "{\"display_text\":\"Demote\",\"title\":\"Demote\",\"id\":\"a\"}"
                  }]
                })
              })
            }
          }
        }, {
          userJid: n,
          quoted: qtext
        })
        await Client.relayMessage(id, msgii.message, {
          messageId: msgii.key.id
        })
      }
    }
  }
} catch (e) {}
	});
	
	
Client.ev.on('groups.update', async (update) => {
		//console.log(update)
		try {
		const data = update[0]
		if (data?.inviteCode) {      
		let botNumber = Client.user.id.split(":")[0]
		let participant = data.author
		if (participant === botNumber) return
        const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
      }
    }
  }
  await Client.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
		}
		} catch (e) {
		}
	});

	return Client
}

startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});