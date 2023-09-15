const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");

const Data = require("./data");
const app = express()
const { register, login, profie, dashboard } = require("./controller/userController");
const authMiddlerware = require("./midderware/authMiddler");
dotenv.config();
const port = process.env.port1;

app.use(express.json())
app.use(cors({
    origin: "*"

}))

app.get("/", (req, res) => {
    res.send("Hello Dinesh How are You Today")
})
app.post("/register", register)
app.post("/login", login)
app.get("/profile", authMiddlerware, profie)
app.get("/dashboard", authMiddlerware, dashboard)

app.post("/user", (req, res) => {
    res.send(Data)
    console.log(Data);
})


app.get("/bihar", (req, res) => {
    res.send(Data)
    // console.log(Data);
})

app.listen(port, () => {
    console.log(`server is live on ${port}`);
})


