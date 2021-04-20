const express = require('express');
const router = express.Router();
const cityController = require('../../controllers/location/city');

    router.post('/:id', cityController.create)
    router.get('/:id', cityController.read)
    router.put('/:id', cityController.update)
    router.delete('/:id', cityController.delete)

module.exports = router;