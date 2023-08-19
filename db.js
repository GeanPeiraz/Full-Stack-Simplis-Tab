import mysql from "mysql"

export const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "resident69",
    database: "crud_bypet1"
})