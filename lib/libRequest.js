"use strict";

const { default: axios } = require("axios");

module.exports = {
    /**
     * @param {*} url receive url to request
     * @returns response
     */
    get: async (url) => {
        const response = await axios.get(url);
        return await response.data;
    },
}
