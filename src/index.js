const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    try{
        const result = await fs.writeFile(fileName, fileContent);
    } catch(e){
        console.log(e);
    }
};


module.exports = updateFile;
