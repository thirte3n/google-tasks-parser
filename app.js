import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
// Check folder if it exists
// Create folder if it doesn't exist
// TODO: Read file and log it to console
// TODO: Create file
// TODO: Append a file
// TODO: Overwrite a file
// TODO: Create a file and append file name
// TODO: Read file and write a file with its contents
// [x] Check if output folder exists
// [x] Create output folder if it doesn't exist
// [ ] Read file tasks.json file from top level directory
// [ ] Loop through tasks
// [ ] Loop through tasks
// [ ] Check if output markdown file exists
// [ ] Create output markdown file
// [ ] Create output markdown file if it doesn't exist
// [ ] Create output markdown file with appended file name if it exists
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '/output');
let outputDirExists;
try {
    await fs.access(outputDir);
    outputDirExists = true;
}
catch (_a) {
    outputDirExists = false;
}
if (!outputDirExists) {
    try {
        await fs.mkdir(path.join(__dirname, '/output'));
    }
    catch (error) {
        console.log(error);
    }
}
