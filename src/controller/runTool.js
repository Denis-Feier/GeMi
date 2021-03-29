const walkSync = require('walk-sync');

const runTool = (codePath) => {

    const paths = walkSync(codePath, { 
        globs: ['node_modules/**/*.js'],
        directories: false,
        includeBasePath: true 
    });

    console.log(paths)

}

exports.runTool = runTool;