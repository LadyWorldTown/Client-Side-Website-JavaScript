var express = require('express');

var charactersRouter = require('./routes/characters');
var filtersRouter = require('./routes/filters');
var publicRouter = require('./routes/public');
var favoritesRouter = require('./routes/favorites');

var app = express();

app.use('/characters/', charactersRouter);
app.use('/favorites/', favoritesRouter);
app.use('/filters/', filtersRouter);
app.use('/', publicRouter);

const PORT  = process.env.PORT || 3050
app.listen(PORT,()=> console.info(`Server has started on ${PORT} - http://localhost:${PORT}`));

module.exports = app;