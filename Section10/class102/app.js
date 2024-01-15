const path = require('path');

const filePath = path.resolve(__dirname, 'people.json');

const writing = require('./modules/writing');
const reading = require('./modules/reading');

const people = [
    { fName: 'João' },
    { fName: 'Maria' },
    { fName: 'Eduardo' },
    { fName: 'Luiza' },
]

const json = JSON.stringify(people, '', 2);

// writing(filePath, json);

async function readFile(filePath) {
    const fileData = await reading(filePath);

    renderData(fileData);
}

function renderData(fileData) {
    const dataObject = JSON.parse(fileData);

    dataObject.forEach(element => {
        console.log(element.fName);
    });
}

readFile(filePath);
