const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const notesRoutes = require('./routes/notesRoutes');


const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', notesRoutes);


app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
})


