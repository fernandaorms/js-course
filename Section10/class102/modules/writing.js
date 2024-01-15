const fs = require('fs').promises;

module.exports = (filePath, fileData) => {
    fs.writeFile(filePath, fileData, { flag: 'w'});
}
