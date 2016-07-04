# Get Key or Default

Gets the value of an objects key, and falls back to a default value.

## Example

```javascript
let getKeyOrDefault = require('get-key-or-default');

// An object without a key
getKeyOrDefault({color: 'blue'}, 'height', 32);
// 32

// An object with a key
getKeyOrDefault({color: 'blue', height: 12}, 'height', 32);
// 12

// No object
getKeyOrDefault(undefined, 'height', 32);
// 32

// Validation
getKeyOrDefault({color: 'blue', height: 'twelve'}, 'height', 32, Number.isInteger);
// 32

```
## Installation
```
$ npm install get-key-or-default
```
## API
```javascript
var getKeyOrDefault = require('get-key-or-default');
```
### getKeyOrDefault(source, key, defaultValue, isValidCallback)
| Type | Data Type | Name | Description |
| --- | --- | --- | --- |
| parameter | object | source | The object containing the key value. |
| parameter | string/number | key | The key that contains the value. |
| parameter | * | defaultValue | The result if the value is not found, or not valid. |
| parameter | function | isValidCallback | Evaluates if a value provided is valid. |
| returns | * | n/a | The source objects key value, otherwise the default value |

### isValidCallback(value)

The validation callback is fired when a defined value is evaluated.

| Type | Data Type | Name | Description |
| --- | --- | --- | --- |
| parameter | !undefined | value | The value that is being validated. |
| returns | boolean | n/a | True if the value is valid, otherwise false. |
