const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { vendorsRouter } = require('./routes/vendors')

const { areaRouter } = require('./routes/areas.js');
const { artistRouter } = require('./routes/artists.js');
const { vendorRouter } = require('./routes/vendors.js');

const PORT = 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/vendors', vendorsRouter);

app.use('/areas', areaRouter);
app.use('/artists', artistsRouter);
app.use('/vendors', vendorRouter);

app.listen(PORT, () => `Listening on PORT ${PORT}.`);
