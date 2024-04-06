import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_cup'
})

// make connection
connection.connect((err) => {
    if (err) {
        console.log("Connection Failed")
    } else {
        console.log("Connection Made Successfully")
    }
})

/**
 * Execute a SQL code with or without values
 * @param {string} sql //SQL query
 * @param {string=id | [selection, id]} values //values to send to sql
 * @param {string} rejectMessage //message to show
 * @returns object of Promise
 */

export const query = (sql, values = '', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                return reject(rejectMessage);
            } else {
                // make parse of the results
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row);
            }
        });
    })
};

export default connection;