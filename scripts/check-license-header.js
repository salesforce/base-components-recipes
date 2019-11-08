const fs = require('fs');
const path = require('path');
const git = require('simple-git');

const root = process.cwd();
const htmlHeaderLicense = fs.readFileSync(
    path.join(__dirname, 'html-header-license.txt')
);
const jsHeaderLicense = fs.readFileSync(
    path.join(__dirname, 'js-header-license.txt')
);

function traverseDir(dir, callback) {
    const files = fs.readdirSync(dir);
    files.forEach(filename => {
        const childPath = path.join(dir, filename);
        const stats = fs.statSync(childPath);
        if (stats.isDirectory()) {
            traverseDir(childPath, callback);
        } else {
            callback({
                name: filename,
                path: childPath
            });
        }
    });
}

function checkAndAddJsLicenseHeader(file) {
    const content = fs.readFileSync(file.path);
    if (content.indexOf(jsHeaderLicense) === -1) {
        fs.writeFileSync(file.path, `${jsHeaderLicense}${content}`);
        console.log(`Licence header added to (${file.name}) -> ${file.path}`);
    }
}

function checkAndAddHtmlLicenseHeader(file) {
    const content = fs.readFileSync(file.path);
    if (content.indexOf(htmlHeaderLicense) === -1) {
        fs.writeFileSync(file.path, `${htmlHeaderLicense}${content}`);
        console.log(`Licence header added to (${file.name}) -> ${file.path}`);
    }
}

function start() {
    const checkLicenseDirs = require('../package.json').checkLicense;
    const changedFiles = [];
    checkLicenseDirs.forEach(relativeDirPath => {
        const dir = path.join(root, relativeDirPath);
        traverseDir(dir, file => {
            const ext = path.extname(file.path);
            switch (ext) {
                case '.js':
                case '.css':
                    checkAndAddJsLicenseHeader(file);
                    changedFiles.push(file.path);
                    break;
                case '.html':
                    checkAndAddHtmlLicenseHeader(file);
                    changedFiles.push(file.path);
                    break;
            }
        });
    });
    git(root).add(changedFiles);
}

start();
