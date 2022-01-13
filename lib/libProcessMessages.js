"use strict";
const formatMessage = (res, message, status) => {
    res.status = status;
    res.send(JSON.stringify({ message }));
}

module.exports = {
    /**
     * 
     * @param {*} res petitions response
     * @param {*} message petitions message
     * @returns formatted petition with status 200
     */
    message: (res, message) => {
        return formatMessage(res, message, 200);
    },
    /**
     * 
     * @param {*} res petitions response
     * @param {*} message petitions message
     * @returns formatted petition with status 400
     */
    error: (res, message) => {
        return formatMessage(res, message, 400);
    }
}