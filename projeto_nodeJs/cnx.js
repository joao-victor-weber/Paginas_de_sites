const{Pool}=require('pg')
const pool = new Pool({
user:'postgres',
password:'jvw310703',
host:'localhost',
port:5432,
database:'aulanode'
})
module.exports=pool