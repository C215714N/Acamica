const Region = require('../../models/location/region')

exports.create= (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.create(req.body, (err, region) => {
            err ? res.send(err) : res.json({
                message: '¡La Region se agregó con éxito!',
                data: region
})})}
exports.read= (req, res) => {
    Region.read((err, region) => {
        err ? res.send(err) : res.send(region)
})}
exports.update= (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.update(req.params.id, req.body, (err, region) => {
            err ? res.send(err) : res.json({
                message: '¡La Region se actualizó con éxito!',
                data: region
})})}
exports.delete= (req, res) => {
    Region.delete(req.params.id, (err, region) => {
        err ? res.send(err) : res.send({
            message: 'La Region se eliminó con éxito.',
            data: region
        })
})}

exports.createCountry = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.create(req.params.id, req.body, (err, country) => {
            err ? res.send(err) : res.json({
                message: '¡La country se agregó con éxito!',
                data: country
})})}
exports.readCountry = (req, res) => {
    Region.read(req.params.id, (err, country) => {
        err ? res.send(err) : res.send(country)
})}
exports.updateCountry = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.update(req.params.id, req.body, (err, country) => {
            err ? res.send(err) : res.json({
                message: '¡El Pais se actualizó con éxito!',
                data: country
})})}
exports.deleteCountry = (req, res) => {
    Region.delete(req.params.id, (err, country) => {
        err ? res.send(err) : res.send({
            message: 'El Pais se eliminó con éxito.',
            data: country
        })
})}

exports.createCity = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.create(req.params.id, req.body, (err, city) => {
            err ? res.send(err) : res.json({
                message: '¡La Ciudad se agregó con éxito!',
                data: city
})})}
exports.readCity = (req, res) => {
    Region.read(req.params.id, (err, city) => {
        err ? res.send(err) : res.send(city)
})}
exports.updateCity = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Region.update(req.params.id, req.body, (err, city) => {
            err ? res.send(err) : res.json({
                message: '¡La Ciudad se actualizó con éxito!',
                data: city
})})}
exports.deleteCity = (req, res) => {
    Region.delete(req.params.id, (err, city) => {
        err ? res.send(err) : res.send({
            message: 'La ciudad se eliminó con éxito.',
            data: city
        })
})}
