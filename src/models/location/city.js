let dbConn = require(`../../dataBase/dbConn`)
    let City = function (city){
        this.id_city = city.id_city
        this.city = city.city
    }
    City.create = (newCity, result) => {
        dbConn.query(`INSERT INTO Cities SET ?`, newCity, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    City.read = (id, result) => {
        dbConn.query(`SELECT * FROM Cities AS c
            JOIN Countries AS p ON p.id_country = c.id_country
            WHERE c.id_country = ?`, id, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    City.update = (id, user, result) => {
        dbConn.query(`UPDATE Cities SET ? WHERE id_city = ?`, [user, id], (err, res) => {
            err ? result(err, null) : result(null, res)
    })}
    City.delete = (id, result) => {
        dbConn.query(`DELETE FROM Cities WHERE id_city = ? `, id, (err, res) => {
            err ? result(err, null) : result(null, res)
    })}

module.exports = City;