let dbConn = require(`../../dataBase/dbConn`)

    let Region = function (region){
        this.id_region = region.id_region
        this.region = region.region
    }

    Region.create = (newRegion, result) => {
        dbConn.query(`INSERT INTO Regions SET ?`, [newRegion], (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Region.read = (result) => {
        dbConn.query(`SELECT * FROM Regions`, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Region.update = (id, region, result) => {
        dbConn.query(`UPDATE Regions SET ? WHERE id_region = ?`, [region, id], (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Region.delete = (id, result) => {
        dbConn.query(`DELETE c FROM cities AS c
            JOIN countries AS p ON p.id_country = c.id_country
            JOIN regions AS r ON r.id_region = p.id_region
            WHERE id_region = ?`, id)
        dbConn.query(`DELETE c FROM countries AS c
            JOIN regions AS r ON r.id_region = c.id_region
            WHERE id_region = ?`, id)
        dbConn.query(`DELETE FROM Regions WHERE id_region = ?`, id, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}

module.exports = Region;