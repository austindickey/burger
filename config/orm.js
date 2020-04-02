var connection = require("./connection.js")

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = []

    for (var key in ob) {
        arr.push(key + "=" + ob[key])
    }

    return arr.toString()
}

var orm = {
    all: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";"
        connection.query(query, function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    create: function(table, vals, cb) {
        var query = "INSERT INTO " + table + " (burger_name) VALUES (?);"
        connection.query(query, vals, function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    update: function(table, id, cb) {
      var query = "UPDATE " + table + " SET devoured = true WHERE id = ?;"
      connection.query(query, id, function(err, result) {
          if (err) throw err
          cb(result)
      })
  }
}

module.exports = orm