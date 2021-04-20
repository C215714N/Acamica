const City = require('../../models/location/city')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : City.create(req.body, (err, city) => {
            err ? res.send(err) : res.json({
                message: '¡La Ciudad se agregó con éxito!',
                data: city
})})}
exports.read = (req, res) => {
    City.read(req.params.id, (err, city) => {
        err ? res.send(err) : res.send(city)
})}
exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : City.update(req.params.id, req.body, (err, city) => {
            err ? res.send(err) : res.json({
                message: '¡La Ciudad se actualizó con éxito!',
                data: city
})})}
exports.delete = (req, res) => {
    City.delete(req.params.id, (err, city) => {
        err ? res.send(err) : res.send({
            message: 'La Ciudad se eliminó con éxito.',
            data: city
        })
})}