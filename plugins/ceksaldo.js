const axios = require('axios');
const { isNullOrUndefined } = require('util');

let handler = async (m, { Verlangid, isCreator, isPremium, qtext, text }) => {
        if (!isCreator) return
        try {
          const { status: checkStatus, data: dataResult } = await axios.get(`https://pay.epep.my.id/api/ceksaldo`, { headers: { Authorization: "Bearer " + global.apikeyy } });
          
          if (checkStatus === 200) {
            return m.reply(`Saldo Utama: ${dataResult.data.saldo}\nSaldo Qris: ${dataResult.data.qris_saldo}\nTotal Saldo: ${dataResult.data.total}`)
          }
          return m.reply(`Gagal cek saldo`)
        } catch (error) {
          if (isNullOrUndefined(error.response?.data)) return console.log(error)
          console.error('Error during check:', error.response?.data);
          return m.reply(`Gagal cek saldo`)
        }
}

handler.command = ["ceksaldo"]

module.exports = handler