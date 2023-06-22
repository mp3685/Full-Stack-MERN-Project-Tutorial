import jwt from 'jsonwebtoken';

// wants to like a post
// click the like button => auth middleware (NEXT) => like controller...

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, `${process.env.REACT_APP_SECRET_KEY}`);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;