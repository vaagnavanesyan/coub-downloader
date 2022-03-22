import sqlite3 from "sqlite3";
import { idGenerator } from "./id-generator";
import { retry } from "./retry";
import { workUnit } from "./work-unit";

const main = async () => {
  const [, , arg1, arg2] = process.argv;
  let start = parseInt(arg1, 36);
  const end = parseInt(arg2, 36);
  const db = new sqlite3.Database(`pages_${arg1}_${arg2}.db`);

  db.serialize(() =>
    db.run("CREATE TABLE IF NOT EXISTS pages (id TEXT, json TEXT, href TEXT, processed INTEGER)")
  );

  const { continueFrom } = await new Promise((resolve) =>
    db.get("select max(id) continueFrom from pages", (err, res) => {
      resolve(res);
    })
  );
  if (continueFrom) {
    console.log(`Continue from ${continueFrom}`);
    start = parseInt(continueFrom, 36);
  }
  const getId = idGenerator(start);
  for (let i = 0; i < end - start; i++) {
    const id = getId.next().value;
    await retry(() => workUnit(id, db, end - start), 8);
  }
};

main();
