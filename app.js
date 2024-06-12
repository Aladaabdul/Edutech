const express = require("express");
const PORT = 8000
const {connectTomongo} = require("./db")
const userRouter = require("./routes/user-routes")

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

connectTomongo();
app.use(express.json())

app.use("/v1/api/user", userRouter);





app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})
