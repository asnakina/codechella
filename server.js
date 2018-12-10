const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { vendorsRouter } = require('./routes/vendors')

const PORT = 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/vendors', vendorsRouter);

app.listen(PORT, () => `Listening on PORT ${PORT}.`);
