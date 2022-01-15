const libOpenExchange = require("../lib/libOpenExchange")

module.exports = {
    /**
     * @returns return the rates list permited for exchange
     */
    getRates: async () => {
        let rates = await libOpenExchange.getRates();
        return Object.keys(rates);
    }
}