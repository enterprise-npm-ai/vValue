# vValue
returns the value passed into it

```js
const vValue = require('vvalue')

console.log(vValue(2)) // 2
console.log(vValue('foo')) // 'foo'
```

Note: we recommend the higher level [identity](https://github.com/enterprise-npm-ai/identityjs) module instead.

Important note: There is a bug in this module: sometimes it returns rounded versions of floats. E.g., sometimes vvalue(2.2) returns 2, and sometimes it returns 2.2.