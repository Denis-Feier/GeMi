const walkSync = require('walk-sync');
const fs = require('fs');
const {
    parseSync
} = require('gemfile');

const {inspectProjectDependencies} = require('./dependencies');

const runTool = (codePath) => {

    const pathsLock = walkSync(codePath, { 
        globs: ['**/Gemfile.lock'],
        directories: false,
        includeBasePath: true 
    });

    const gemsFilesElements = pathsLock.map(path => {
        const gemFileLock = parseSync(path);

        const dependencies = inspectProjectDependencies(gemFileLock['DEPENDENCIES'] || [])

        

        // const dependenciesGems = gemFileLock['GEM'] || [];

        // const git = gemFileLock['GIT'] || [];

        return dependencies;
    });


    console.log(gemsFilesElements);

    const path = 'results.json';
    // const data = JSON.stringify(gems[gems.length - 1]);

    // fs.writeFile(path, data, { flag: 'a+', overwrite: true }, function (err) {
    //     if (err) throw err;
    //     console.log("It's saved!");
    // });

}

exports.runTool = runTool;