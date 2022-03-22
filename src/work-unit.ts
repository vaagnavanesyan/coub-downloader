let count = 0;
export const workUnit = async (id, db, length) => {
  console.log(`current: ${id} ${count + 1} / ${length}`);
  const response = await fetch(`https://coub.com/view/${id}`, {
    redirect: "manual",
  });
  if (response.status >= 400) return;

  const html = await response.text();
  const json =
    html.match(/coubPageCoubJson.*[\r\n]+(?<json>[^\r\n]+)/)?.groups?.json ??
    "";
  const href = html.match(/href="(?<href>.*)">redirected</)?.groups?.href ?? "";
  if (!json && !href) {
    throw `Weird ${id}`;
  }
  db.run(
    `INSERT INTO pages(id, json, href, processed) VALUES(?, ?, ?, ?)`,
    [id, json, href, false],
    function (err) {
      if (err) {
        return console.log(err.message);
      }
    }
  );
  count ++;
};
