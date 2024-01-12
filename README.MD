# A simple function that traverses an object

Pass the object and the keys (as strings) and the function return the value or undefined 
if it doesn't exist.

```
const pathToTarget = require('path_to_target');
const anObject = {hello: {world: ' hello earth'}};
const result = pathToTarget(anObject, ['hello', 'world']);
console.log(result);
//'hello earth'
```

