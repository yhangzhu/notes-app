const fs = require('fs');

const dataBuffer = fs.readFileSync('./1-JSON.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'yuhang zhu';
data.age = 20;

const JSONdata = JSON.stringify(data);

fs.writeFileSync('./1-JSON.json', JSONdata);
