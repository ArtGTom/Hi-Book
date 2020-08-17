import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'pg',
    connection: {
        host : 'localhost:4444',
        user : 'postgres',
        password : 'hibook3',
        database : 'db_hibook'
    },
    useNullAsDefault: true,
})