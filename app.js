const express = require("express");
const PORT = 8000
const { connectTomongo } = require("./db")
const userRouter = require("./routes/user-routes")
const schoolRouter = require("./routes/school-routes")

const app = express()


connectTomongo();
app.use(express.json())


app.use("/v1/api/user", userRouter);
app.use("/v1/api/school", schoolRouter);





app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})
