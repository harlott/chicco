import path from 'path';
import fs from 'fs';
import fsp from 'fs/promises';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import { read } from 'to-vfile';
import { unified } from 'unified';
import unifiedPluginHandlingYamlMatter from './unifiedPluginHandlingYamlMatter.mjs';

const DIRECTORY_NAME = 'data';
const DIRECTORY_PATH = path.join(process.cwd(), DIRECTORY_NAME);
const DIRECTORY_JSON_TO_WRITE = path.join(process.cwd(), 'data-json');

async function resetOutputDir() {
  if (fs.existsSync(DIRECTORY_JSON_TO_WRITE)) {
    await fsp.rm(DIRECTORY_JSON_TO_WRITE, { recursive: true, force: true });
  }
  await fsp.mkdir(DIRECTORY_JSON_TO_WRITE, { recursive: true });
}

async function parseYamlToJson(fullFilePath) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .use(unifiedPluginHandlingYamlMatter)
    .process(await read(fullFilePath));

  return file.data.matter ?? {};
}

async function writeJsonFile(fileName, jsonData, subdir) {
  const fileNameWithoutExt = path.parse(fileName).name;

  const outputDir = subdir
    ? path.join(DIRECTORY_JSON_TO_WRITE, subdir)
    : DIRECTORY_JSON_TO_WRITE;

  await fsp.mkdir(outputDir, { recursive: true });

  const outputFilePath = path.join(outputDir, `${fileNameWithoutExt}.json`);
  await fsp.writeFile(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf8');

  console.log(`Written: ${outputFilePath}`);
}

async function processDirectory() {
  const files = await fsp.readdir(DIRECTORY_PATH);

  for (const file of files) {
    const fullPath = path.join(DIRECTORY_PATH, file);
    const stats = await fsp.stat(fullPath);

    console.log(`Processing... ${fullPath}`);

    if (stats.isFile()) {
      const jsonData = await parseYamlToJson(fullPath);
      await writeJsonFile(file, jsonData);
    } else if (stats.isDirectory()) {
      const nestedFiles = await fsp.readdir(fullPath);

      for (const nestedFile of nestedFiles) {
        const nestedFullPath = path.join(fullPath, nestedFile);
        const nestedStats = await fsp.stat(nestedFullPath);

        console.log(`Processing... ${nestedFullPath}`);

        if (nestedStats.isFile()) {
          const nestedJsonData = await parseYamlToJson(nestedFullPath);
          await writeJsonFile(nestedFile, nestedJsonData, file);
        }
      }
    }
  }
}

async function main() {
  try {
    await resetOutputDir();
    await processDirectory();
    console.log('Done.');
  } catch (error) {
    console.error('Build script failed:', error);
    process.exit(1);
  }
}

await main();
