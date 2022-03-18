import sqlite3 from "sqlite3";
import { Coub } from "./types";
import { writeFile, mkdirSync, existsSync } from "fs";
import { promisify } from "util";
import { join } from "path";
const writeFilePromise = promisify(writeFile);

const setProcessed = async (db, id): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.run(`update pages set processed = 1 where id = '${id}'`, (res, err) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const getPages = async (db, count, from?, to?): Promise<Coub[]> => {
  return new Promise((resolve, reject) => {
    const sql = `select json from pages where json is not '' and processed = 0 and json_extract(json, '$.banned') = 0 ${
      from && to ? `and id between '${from}' and '${to}'` : ""
    } ORDER by id limit ${count}`;
    db.all(sql, function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res.map((e) => JSON.parse(e.json)));
    });
  });
};

const downloadFile = async (url, path, name) =>
  fetch(url)
    .then((x) => x.arrayBuffer())
    .then((x) => {
      if (!existsSync(path)) {
        mkdirSync(path);
      }
      return writeFilePromise(join(path, name), Buffer.from(x));
    });

const downloadCoubs = async () => {
  const dbPath = process.argv[2];
  const outputPath = process.argv[3];
  const from = process.argv[4];
  const to = process.argv[5];
  console.log(`Using database: ${dbPath}`);
  console.log(`Saving to: ${outputPath}`);
  if (from && to) {
    console.log(`Processing only range ${from}-${to}`);
  } else {
    console.log(`Processing whole database`);
  }
  const db = new sqlite3.Database(dbPath);
  const rowsPerQuery = 25;
  let pages = await getPages(db, rowsPerQuery, from, to);
  while (pages.length > 0) {
    for (const page of pages) {
      const video = page.file_versions.html5.video.med;
      const audio =
        page.file_versions.html5.audio?.higher ??
        page.file_versions.html5.audio?.high;
      console.log(`Processing ${page.permalink}...`);
      if (audio?.url) {
        await downloadFile(
          audio.url,
          join(outputPath, page.permalink),
          "input.mp3"
        );
      }
      await downloadFile(
        video.url,
        join(outputPath, page.permalink),
        "input.mp4"
      );

      await setProcessed(db, page.permalink);
    }
    pages = await getPages(db, rowsPerQuery, from, to);
  }
};

downloadCoubs();
