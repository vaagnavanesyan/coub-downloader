const { writeFileSync } = require("fs");

let commands = ''
for (let i = 2; i < 30; i++) {
    const num = i > 9 ? i : '0' + i;
    commands += `ATTACH 'pages_${num}.db' as db${num};
    INSERT INTO pages SELECT * FROM db${num}.pages;\n`
}

writeFileSync('commands.sql', commands)