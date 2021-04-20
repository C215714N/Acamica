const express = require('express');
const router = express.Router();
const countryController = require('../../controllers/location/country');

    router.post('/:id', countryController.create)
    router.get('/:id', countryController.read)
    router.put('/:id', countryController.update)
    router.delete('/:id', countryController.delete)

module.exports = router;