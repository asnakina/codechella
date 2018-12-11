const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { areaRouter } = require('./routes/areas.js');
const { artistsRouter } = require('./routes/artists.js');
const { vendorsRouter } = require('./routes/vendors.js');
const { usersRouter } = require('./routes/users.js');

const PORT = 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/areas', areaRouter);
app.use('/artists', artistsRouter);
app.use('/vendors', vendorsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => `Listening on PORT ${PORT}.`);
