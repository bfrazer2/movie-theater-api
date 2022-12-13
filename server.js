//boilerplate main server creation
const express = require("express")
const app = express()
const port = 3000
const {db} = require("./db")

//Creates custom middleware router for requests about shows & users
const showsRouter = require("./routes/shows")
app.use("/shows", showsRouter)
const usersRouter = require("./routes/users")
app.use("/users", usersRouter)

//more boilerplate
app.listen(port, () => {
    db.sync()
    console.log(`Listening on http://localhost${port}`)
})