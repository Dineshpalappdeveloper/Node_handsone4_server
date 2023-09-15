const secretkey = "23232131"
// const secretkey = "59894616498798"
const jwt = require('jsonwebtoken')
const authMiddlerware = (req, res, next) => {
    const bearer = req.headers["authorization"]
    if (bearer === undefined) {
        return res.send("Dont Have Token")
    } else {
        const token = bearer.split(" ")[1]
        const token1 = process.env.seecrectkey
        console.log("log token by dkp", token1);
        if (token === undefined) {
            return res.send({ msg: "Access Denide try Again" })
        }

        // const validate = jwt.verify(token, process.env.seecrectkey)
        const validate = jwt.verify(token, secretkey)
        if (validate) {
            return next()
        }
        return res.send({ message: "Not Allowed" })
    }
}
module.exports = authMiddlerware;