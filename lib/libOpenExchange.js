const libRequest = require('./libRequest');
const url_base = `${process.env.OPXC}`
module.exports = {
    /**
     * @returns value converted
     */
    getRates: async () => {
        let url = `${url_base}?app_id=${process.env.APP_ID}&base=USD`;
        let val = await libRequest.get(url);
        return val.rates;
    }
}