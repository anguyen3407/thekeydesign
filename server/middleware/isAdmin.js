module.exports = function(req, res, next){
    if (req.user && req.user.isadmin === 'true'){
        return next();
    }
    return res.status(403).send("Need to be logged in as an admin")
}