const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');

  try {
    const output = await countStudents(database);
    res.end(output);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
