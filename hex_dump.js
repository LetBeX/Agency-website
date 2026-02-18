
const fs = require('fs');
const buffer = fs.readFileSync('package.json');
console.log('File size:', buffer.length);
const start = Math.max(0, buffer.length - 50);
console.log('Last 50 bytes (hex):');
for (let i = start; i < buffer.length; i++) {
    console.log(`${i}: ${buffer[i].toString(16).padStart(2, '0')} (${String.fromCharCode(buffer[i])})`);
}
