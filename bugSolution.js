```javascript
// Correct use of $in operator with an array of ObjectId
const { ObjectId } = require('mongodb');

db.collection('myCollection').find({ _id: { $in: [new ObjectId("654321"), new ObjectId("123456")] } }).toArray();
```