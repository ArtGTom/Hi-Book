import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '4444',
        user: 'postgres',
        password: 'hibook3',
        database: 'db_hibook'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};