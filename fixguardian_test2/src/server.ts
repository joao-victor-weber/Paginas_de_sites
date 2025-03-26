
import express from 'express'
const app = express();
const route= require("./route")
app.use(express.urlencoded({ extended: true }))
app.use(route)
app.listen(3000, () => 'server running on port 3000')