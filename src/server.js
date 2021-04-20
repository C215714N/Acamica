    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = process.env.PORT || 3200;
/* modules */
    const user = require('./routes/user');
    const company = require('./routes/company');
    const contact = require('./routes/contact');
    const pref = require('./routes/pref');
    const region = require('./routes/location/region')
    const country = require('./routes/location/country')
    const city = require('./routes/location/city')

// Endpoints.
app.use(cors());
app.use(express.json());
app.listen(port, () => {console.log(`El puerto es: ${port}`)})
app.get('/', (req, res) => {res.send({
    title: 'Data Warehouse',
    author: 'Jonathan Kim',
    version: 'Beta 1.0',
    documentation: 'https://localhost:3200/api-docs'
})});
/* routes */
    app.use('/user', user);
    app.use('/company', company);
    app.use('/contact', contact);
    app.use('/preference', pref);   
    app.use('/region', region);
    app.use('/country', country);  
    app.use('/city', city);