module.exports = (req, res) => {
    res.render('login', {
        title: 'Login',
        message: req.flash('loginMessage')
    });
}
