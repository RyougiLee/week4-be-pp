function auth(req, res, next){
    if (req.query.admin === 'true'){
        next()
    } else {
        res.status(403).send();
    }
}

module.exports = auth;
