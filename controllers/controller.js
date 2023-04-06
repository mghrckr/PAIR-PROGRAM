let { User, Item, Wallet } = require('../models')


class Controller {
    static loginPage(req, res) {
        res.render("loginPage")
    }
    static signupPage(req, res) {
        res.render("signupPage")
    }
    static validateAccount(req, res) {
        const { name, email, password, role } = req.body
        // console.log(req.body, name, email, password, role);
        if (name) { //the form that has name is signup form, by having name it means he try to signUp
            if (role === "admin") {
                User.create({
                    name: name,
                    email: email,
                    password: password,
                    role: role
                })
                    .then((data) => {
                        res.redirect(`/user/admin/${data.id}`)
                        // res.render("admin-page", {data})
                    })
                    .catch((err) => {
                        res.send("hei anda salah masukin data")
                    })
            } else if (role === "buyer") {
                User.create({
                    name: name,
                    email: email,
                    password: password,
                    role: role
                })
                    .then((data) => {
                        // console.log(data.id);
                        res.redirect(`/user/buyer/${data.id}`)
                    })
                    .catch((err) => {
                        res.send("hei anda salah masukin data")
                    })
            }
        } else if (!name) { //the form that don't have name input is login form, by not having name it means that he tring to do login process
            User.findOne({
                where: { email, password }
            })
                .then((data) => {
                    if (data.role === "buyer") {
                        res.redirect(`/user/buyer/${data.id}`)
                    } else if (data.role === "admin") {
                        res.redirect(`/user/admin/${data.id}`)
                    }
                })
                .catch((err) => {
                    res.send("Hei anda penyusup! muhasabah diri anda!!! Data kamu berbeda dengan data kami!")
                })
        }
    }
    static home(req, res) {

    }
    static buyerPage(req, res) {
        Item.findAll()
            .then((data) => {
                // res.send(data)
                res.render("buyer-page", { data })
            })
            .catch((err) => {
                res.status(500).send(`Error occurred: ${err}`);
            });
    }

    static adminPage(req, res) {
        Item.findAll()
            .then((data) => {
                res.render("admin-page", { data })
            })
            .catch((err) => {
                res.send(`ga masuk cuy`)
            })
    }
}

module.exports = Controller