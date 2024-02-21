module.exports = {
    uniqueToken() {
        return this._token() + this._timeStamp() + this._token();
    },

    _token() {
        return Math.random().toString(36).slice(2);
    },
    _timeStamp() {
        return (Date.now() + Math.random() + new Date().getUTCMilliseconds()).toString(36);
    }

}