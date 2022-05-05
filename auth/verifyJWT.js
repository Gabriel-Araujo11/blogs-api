const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const UNAUTHORIZED = 401;
const ERRO_HTTP = 500;

// https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-node-js-2/;
function verifyJWTMethod(req, res, next) { 
    const token = req.headers; 
    if (!token) {
        return res.status(UNAUTHORIZED).send({ auth: false, message: 'Token não informado.' });
    } 
    
    jwt.verify(token, SECRET, (err, decoded) => { 
        if (err) return res.status(ERRO_HTTP).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userId = decoded.id; 
        console.log(`User Id: ${decoded.id}`);
        next(); 
    }); 
}    

module.exports = { verifyJWTMethod };