const conn = require("./pool_promise")

const id = "6";

let sql = `delete from customer where ?`;
conn.query(sql, {id}, (err, results) => {
    if(err) {
        console.log(err)
    }
 
    console.log(results);
    if(results.affectedRows == 1) {
        console.log("success delete!");
    } else {
        console.log("fail delete...");
    }
});