let dbConn = require(`../../dataBase/dbConn`)
    let Country = function (country){
        this.id_country = country.id_country
        this.country = country.country
    }

    Country.create = (newCountry, result) => {
        dbConn.query(`INSERT INTO Countries SET ?`, newCountry, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Country.read = (id, result) => {
        dbConn.query(`SELECT * FROM Countries AS c
            JOIN regions AS r ON r.id_region = c.id_region
            WHERE r.id_region = ?`, id, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Country.update = (id, user, result) => {
        dbConn.query(`UPDATE Countries SET ? WHERE id_country = ?`, [user, id], (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    Country.delete = (id, result) => {
        dbConn.query(`DELETE c FROM cities AS c
            JOIN countries AS p ON p.id_country = c.id_country
            WHERE id_country = ?`, id)
        dbConn.query(`DELETE FROM Countries WHERE id_country = ?`, id, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}

module.exports = Country;