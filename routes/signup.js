module.exports = (req, res) => {
    res.render('signup', {
        title: 'Sign up',
        message: req.flash('signupMessage')
    });
}
