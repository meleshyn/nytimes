const path = require('path');
const { readFileSync, writeFileSync } = require('fs');

const filePath = path.join(__dirname, '../../tmp/date');

let lastDate = (() => {
  try {
    const date = readFileSync(filePath, 'utf-8');
    return new Date(date || 0);
  } catch (e) {
    return new Date(0);
  }
})();

const set = (date) => {
  writeFileSync(filePath, date.toISOString());
  lastDate = date;
};

const get = () => lastDate;

module.exports = {
  set,
  get,
};