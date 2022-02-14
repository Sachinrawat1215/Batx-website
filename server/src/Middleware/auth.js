const jwt = require('jsonwebtoken');
const registerModel = require('../Schema/register');

const authentication = async (request, response, next) => {
    try {
        const tokenStr = request.headers.cookie;
        const token = tokenStr.slice(10, tokenStr.lenght);
        
        if(token === undefined){
            response.sendStatus(500);
        };

        // console.log(token);d

        const AuthenticateToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        // console.log(AuthenticateToken);
        const rootUser = await registerModel.findOne({_id: AuthenticateToken._id, 'tokens.token': token});
        console.log(rootUser);
        
        if(!rootUser){
            response.sendStatus(500);
        };

        request.rootUser = rootUser;
        request.token = token;

        next();
    } catch (error) {
        response.status(500).json(error);
    }
};

module.exports = authentication;