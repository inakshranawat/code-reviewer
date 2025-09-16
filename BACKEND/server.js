require('dotenv').config()
const app = require('./src/app')



app.listen('https://code-reviewer-backendd.onrender.com',()=>{
    console.log(`server is running on the port http://localhost:3000`)
})
