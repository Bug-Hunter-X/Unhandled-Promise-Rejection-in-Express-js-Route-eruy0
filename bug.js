const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    // Error handling is missing here.  The error is swallowed! 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an error
  throw new Error('Something went wrong!');
}