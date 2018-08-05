const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, '/public/uploads'),
    db: {
        url: 'mongodb://localhost:27017',
        name: 'shop'
    },
    jwt: {
        secret: 'some kinda very secret string',
        expires: 3600
    },
    facebook: {
        appId: "000", // Enter your app ID here
        appSecret: "000" // Enter your app secret here
    }
};