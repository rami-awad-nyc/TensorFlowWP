import express from 'express';
import url from 'url';
import path from 'path';
import fs from 'fs';

// setup & middleware
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('layout.hbs');
});

app.listen(8080);
