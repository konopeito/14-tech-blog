const withAuth = (req, res, next) => {
    // authentication redirects user to login (if not logged in)
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;