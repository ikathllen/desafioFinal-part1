import LoginSchema from "../schema/LoginSchema";
const jwt = require("jsonwebtoken");

module.exports = (req: any, res: any, next: any ) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: 'No token provided'});
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2){
        return res.status(401).send({error: 'Token error'});
    }

    const [scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token bad'});
    }

    jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
        if (err){
            return res.status(401).send({error: 'Token invalid'});
        }else{
            req.userId = decoded.id;
            return next();
        }
    })

}