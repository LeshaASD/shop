const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

const auth = async (req, res, next) => {
    const token = req.get('Token');

    if (!token) {
        return res.status(401).send({message: 'No token present'});
    }

    let tokenData;

    try {
        tokenData = jwt.verify(token, config.jwt.secret);
    } catch (e) {
        console.log(e);
        return res.status(401).send({message: 'Token incorrect'});
    }

    const user = await User.findById(tokenData.id);

    if (!user) {
        return res.status(401).send({message: 'This user does not exist'});
    }

    req.user = user;

    next();
};

module.exports = auth;