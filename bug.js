```javascript
const query = { $expr: { $eq: [ { $toDouble: '$price' }, 10 ] } };

// This query is incorrect. The correct query should be:
const query = { price: { $toDouble: 10 } };
```