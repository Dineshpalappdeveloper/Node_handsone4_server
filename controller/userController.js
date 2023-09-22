let arr = [];
// const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const secretkey = "23232131"
const saltround = 10;
// dotenv.config();

const register = (req, res) => {
    const details = req.body;
    if (details.name && details.phone && details.email && details.password) {
        const match = arr.find((item) => details.email === item.email);
        if (match) {
            return res.send({ msg: "User is already registred." })
        }
        const hashpassword = bcrypt.hashSync(details.password, saltround);
        const temp = {
            name: details.name,
            email: details.email,
            phone: details.phone,
            password: hashpassword,
        }
        arr.push(temp);
        const token = jwt.sign({ email: details.email }, secretkey, { expiresIn: "30 days" })
        return res.status(200).send({ msg: "user is register", result: temp, token: token });

    }
    else {
        return res.send({ msg: "user is not  register, Register first" });

    }
};


const login = async (req, res) => {
    const details = req.body;
    if (details.email && details.password) {
        const match = arr.find((item) => details.email === item.email);
        if (!match) {
            return res.send({ msg: "user is not register" });
        }
        const validated = await bcrypt.compare(details.password, match.password);
        if (!validated) {
            return res.send({ msg: "user or password is wrong " });
        }
        const token = jwt.sign({ email: details.email }, secretkey, { expiresIn: "30 days" })
        return res.send({ msg: "user is login successfully", token: token });
    }
    else {
        return res.send({ msg: "user is login failled, Try Again" });

    }
};

const profie = (req, res) => {

    res.send({ name: "Dinesh kumar", Roll: "255" });
};
const dashboard = (req, res) => {

    res.send({ msg: "Welcome to  dashboard " });
};
module.exports = { register, login, profie, dashboard };
