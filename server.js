const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { areaRouter } = require('./routes/areas.js');

const PORT = 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/areas', areaRouter);
app.listen(PORT, () => `Listening on PORT ${PORT}.`);
