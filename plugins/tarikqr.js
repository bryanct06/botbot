const axios = require('axios');
const { isNullOrUndefined } = require('util');

let handler = async (m, { Verlangid, isCreator, isPremium, qtext, text }) => {
        if (!isCreator) return
        try {
          const { status: checkStatus, data: dataResult } = await axios.get(`https://pay.epep.my.id/api/tarikqr`, { headers: { Authorization: "Bearer " + global.apikeyy } });
          
          if (checkStatus === 200 && dataResult.message == `['_']`) {
            return m.reply(`Sukses menarik qris, mohon tunggu 1-5 menit.`)
          }
          return m.reply(`Saldonya ga cukup buat dicairin.`)
        } catch (error) {
          if (isNullOrUndefined(error.response?.data)) return console.log(error)
          console.error('Error during check:', error.response?.data);
          return m.reply(`Gagal pencairan saldo`)
        }
}

handler.command = ["qriscair"]

module.exports = handler