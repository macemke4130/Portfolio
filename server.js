import express from 'express';
import * as path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

var app = express();
app.use(express.json());

app.use(express.static('./public'));

app.listen(process.env.PORT || 4000);