const { register, login, login1 } = require("./controller/userController");

const route = require("express").Router();
route.post("/register", register)

// route.post("/login", login)

route.get("/login1", login)

module.exports = route