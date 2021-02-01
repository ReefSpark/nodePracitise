
const axios =require('axios')
const { AuthenticatedClient } = require("./okexClient")
class Api  {

    async okexRequest() {
        try {
            const timestamp = await this.getTime();
            console.log('TimeStap:',timestamp)
            //api //secret //passphare
            const authClient = new AuthenticatedClient("d067b1da-4c7d-4a7f-afe3-25df5074d343", "9458AEF053FAE821847357D7F12F095D", "Beldex123", timestamp.epoch);
            return { status: true, result: authClient }
        }
        catch (err) {
            return { status: false, error: err.message }
        }

    }
    async getTime() {
        const time = await axios({
            method: 'get',
            url: `https://www.okex.com/api/general/v3/time`
        });
        return time.data;
    }


}

module.exports = new Api();