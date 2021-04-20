const express = require('express');
const router = express.Router();
const regionController = require('../../controllers/location/region');

    router.post('/', regionController.create)
    router.get('/', regionController.read)
    router.put('/:id', regionController.update)
    router.delete('/:id', regionController.delete)

module.exports = router;