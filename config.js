exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                       'mongodb://dan:dantheman@ds127878.mlab.com:27878/shopping-list-db':
                       'mongodb://<dbuser>:<dbpassword>@ds127878.mlab.com:27878/shopping-list-db');
                       //'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;
