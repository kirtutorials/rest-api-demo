exports.signup = (req, res, next) => {
    res.send({
        msg: "User Successfully Registered!"
    })
}

exports.signin = (req, res, next) => {
    res.send({
        msg: "User Successfully LoggedIn!"
    })
}

exports.logout = (req, res, next) => {
    res.send({
        msg: "User Successfully Logged!"
    })
}