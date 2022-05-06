const jwt = require('jsonwebtoken');

// const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;

// const ERRO_HTTP = 500;
const UNAUTHORIZED = 401;

// https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-node-js-2/;
function verifyJWTMethod(req, res, next) { 
    const { authorization: token } = req.headers; 
    if (!token) {
        return res.status(UNAUTHORIZED).send({ auth: false, message: 'Token not found' });
    } 
    
    jwt.verify(token, SECRET, (err, decoded) => { 
        if (err) {
        return res.status(UNAUTHORIZED).send({ auth: false, message: 'Expired or invalid token' }); 
        }

        req.userId = decoded.id; 
        console.log(`User Id: ${decoded.id}`);
        next(); 
    }); 
}    

module.exports = verifyJWTMethod;