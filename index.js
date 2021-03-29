const fs = require('fs');

const {runTool} = require('./src/controller/runTool');

const args = process.argv.slice(2);

if (args.length !== 1) {
    throw new Error('Usage npm start <PATH_TO_CODE>');
} 

const path = args[0];

const stats = fs.statSync(path);

if (!stats.isDirectory()) {
    throw new Error(`${path} is not a valid directory`);
}
 
runTool(path);
