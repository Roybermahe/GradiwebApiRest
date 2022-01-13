const libRequest = require('./libRequest');
const url_base = `${process.env.OPXC}`
module.exports = {
    /**
     * @param {number} value value to convert
     * @param {string} from actual rate
     * @param {string} to rate to convert
     * @returns value converted
     */
    convert: async (value, from, to) => {
        let url = `${url_base}/${value}/${from}/${to}?app_id=${process.env.APP_ID}`;
        let val = await libRequest.get(url);
        return val.response;
    }
}