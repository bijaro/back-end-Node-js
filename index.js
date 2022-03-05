const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(9000, () => {
  console.log("the server is running");
});

const db = mysql.createPool({
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    database :'my_dbase'
})




app.get("/", (req, resHttp) => {
                    const commentInsert = "INSERT INTO comments( id,name, email, comment) VALUES (null,'mehdi','lalej@gmail.com','nice job') ";
      db.query(commentInsert, (err, res) => {
                          if(err) throw err
                          resHttp.send("mehdi");               
                    })
                   
})

