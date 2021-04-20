const Country = require('../../models/location/country')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Country.create(req.body, (err, region) => {
            err ? res.send(err) : res.json({
                message: '¡La Region se agregó con éxito!',
                data: region
})})}
exports.read = (req, res) => {
    Country.read(req.params.id, (err, region) => {
        err ? res.send(err) : res.send(region)
})}
exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Country.update(req.params.id, req.body, (err, region) => {
            err ? res.send(err) : res.json({
                message: '¡La Region se actualizó con éxito!',
                data: region
})})}
exports.delete = (req, res) => {
    Country.delete(req.params.id, (err, region) => {
        err ? res.send(err) : res.send({
            message: 'La Region se eliminó con éxito.',
            data: region
        })
})}