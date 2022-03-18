import pLimit from "p-limit";
import sqlite3 from "sqlite3";
import { idGenerator } from "./id-generator";
import { retry, workUnit } from "./work-unit";

const main = async () => {
  const [, , arg1, arg2] = process.argv;
  const start = parseInt(arg1, 36);
  const end = parseInt(arg2, 36);
  const db = new sqlite3.Database(`pages_${arg1}_${arg2}.db`);

  db.serialize(() =>
    db.run("CREATE TABLE IF NOT EXISTS pages (id TEXT, json TEXT, href TEXT)")
  );

  const limit = pLimit(16);
  const promises = [];

  const getId = idGenerator(start);
  for (let i = 0; i < end - start; i++) {
    const id = getId.next().value;
    console.log(`preparing ${i} / ${end - start}...`);
    limit(retry, () => workUnit(id, db, end - start), 2);
  }
  await Promise.all(promises);
};

main();
