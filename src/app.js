const express = require('express');
const cors = require('cors');

import routes from './routes';

require('dotenv/config');

const app = express();

import './database';

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);




