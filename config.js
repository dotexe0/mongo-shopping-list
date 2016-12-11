exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://<dotexe0>:<Squier101!>@ds127878.mlab.com:27878/shopping-list-db':
                            'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;
