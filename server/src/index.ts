import express from 'express';
const app = express();
const port = 9000;

const one = 1;
const two = 2;

app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));

app.listen(port);

console.log(`[app] http://localhost:${port}`);
