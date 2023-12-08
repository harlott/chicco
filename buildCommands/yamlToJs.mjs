import path from 'path';
import fs, { existsSync } from 'fs';
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'
import { read } from 'to-vfile'
import { unified } from 'unified'
import unifiedPluginHandlingYamlMatter from './unifiedPluginHandlingYamlMatter.mjs'

const DIRECTORY_NAME = 'data';
const DIRECTORY_PATH = path.join(process.cwd(), DIRECTORY_NAME);
const DIRECTORY_JSON_TO_WRITE = path.join(process.cwd(), 'data-json');
if (fs.existsSync(DIRECTORY_JSON_TO_WRITE)) {
  // CHECK IF IT'S EMPTY: IF NOT, READ RECURSIVELY AND DELETE ALL CONTENT
  fs.rmdirSync(DIRECTORY_JSON_TO_WRITE);
}

fs.mkdirSync(DIRECTORY_JSON_TO_WRITE);

const parseYamlToJson  = async (dir, fileToRead) => {
  const file = await unified()
  .use(remarkParse)
  .use(remarkStringify)
  .use(remarkFrontmatter)
  .use(unifiedPluginHandlingYamlMatter)
  .process(await read(`${dir}${fileToRead}`));
  return JSON.parse(JSON.stringify(file.data.matter));
}

const writeJsonFile = async (fileName, jsonData, subdir) => {
  const fileNameSplitted = fileName.split('.'); 
  const fileNameToWrite = fileNameSplitted[0];
  const filePathToWrite = !subdir
    ? `${DIRECTORY_JSON_TO_WRITE}/${fileNameToWrite}.json`
    : `${DIRECTORY_JSON_TO_WRITE}/${subdir}/${fileNameToWrite}.json`;
  const subdirPath = `${DIRECTORY_JSON_TO_WRITE}/${subdir}`;
  if (subdir && !fs.existsSync(subdirPath)) {
    fs.mkdirSync(subdirPath);
  }
  fs.writeFile(filePathToWrite, jsonData, (err) => {
    if (err) {
      console.log(`Error during file writing: ${err}`);
    }
  })
}

// passsing directoryPath and callback function
fs.readdir(DIRECTORY_PATH, async function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    /**
     * listing all files using forEach
     * handle only 1 level of nested dir for now
     */
    try {
      for (const file of files) {
        const stats = fs.statSync(`${DIRECTORY_PATH}/${file}`);
        console.log(`Processing... ${DIRECTORY_PATH}/${file}`);
        if (stats.isFile()) {
          const jsonData = await parseYamlToJson('./data/', file);
          writeJsonFile(file, JSON.stringify(jsonData));
        } else {
          fs.readdir(`${DIRECTORY_PATH}/${file}`, async function(errNestedDir, fileNestedDir){
            if (errNestedDir) {
              return console.log(`Unable to scan nested dir: ${err}`);
            }
            for (const nestedFile of fileNestedDir) {
              const statsNested = fs.statSync(`${DIRECTORY_PATH}/${file}/${nestedFile}`);
              console.log(`Processing... ${DIRECTORY_PATH}/${file}/${nestedFile}`);
              if (statsNested.isFile()) {
                const nestedJsonData = await parseYamlToJson('./data/', nestedFile);
                writeJsonFile(nestedFile, JSON.stringify(nestedJsonData), file);
              }
            }
          });
        }
      }
    } catch (e) {
      console.log(` = ${e.errno}`);
    }
});
