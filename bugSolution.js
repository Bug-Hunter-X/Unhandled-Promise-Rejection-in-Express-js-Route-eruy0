const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    console.error('Error during async operation:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an error
  throw new Error('Something went wrong!');
} 