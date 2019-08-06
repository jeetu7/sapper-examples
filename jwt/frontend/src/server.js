import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import bodyParser from 'body-parser';
import { configure } from '@beyonk/sapper-httpclient';
import { create } from '@beyonk/sapper-httpclient';

const FileStore = sessionFileStore(session);
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
configure({ baseUrl: 'http://localhost:5000' })
const api = create()

const app = polka() // You can also use Express

app.use(bodyParser.json())

app.use(session({
		secret: 'my-super-secret',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536000
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))

app.use(
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
)

app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
