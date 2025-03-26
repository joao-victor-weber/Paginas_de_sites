const fs=require('fs')

const logins=(JSON.parse(fs.readFileSync('login.json')))
const novoLogin=(
    {
        "Email": "email.aleatorio3.com",
        "senha": "1254"
    }
)
fs.writeFileSync('login.json',JSON.stringify([...logins,novoLogin]))
console.log(JSON.parse(fs.readFileSync('login.json')))