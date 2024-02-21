# NPM - Package
## A simple npm package to create a unique token

```js
    uniqueToken() {
        return this._token() + this._timeStamp() + this._token();
    },

    _token() {
        return Math.random().toString(36).slice(2);
    },
    _timeStamp() {
        return (Date.now() + Math.random() + new Date().getUTCMilliseconds()).toString(36);
    }
```

## Install

```js
npm i arindam-unique-token
```

## Example

```js
const token = require('arindam-unique-token');
console.log(token.uniqueToken());
```

### Thank you!

