const test = require('./index');
const fs = require('fs');
fs.readFile('./fiber.md', 'utf-8', (err, data) => {
  if (err) throw err;
  test(data);
});
