
const fs = require('fs');
const content = fs.readFileSync('package.json');
console.log('Total length:', content.length);
console.log('Byte at 1045:', content[1045]);
for (let i = 1040; i < content.length; i++) {
    console.log(`${i}: ${content[i]} (${String.fromCharCode(content[i])})`);
}
try {
    JSON.parse(content.toString('utf8'));
    console.log('JSON parse successful');
} catch (e) {
    console.error('JSON parse failed:', e.message);
}
