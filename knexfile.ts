export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./knex/migrations`
        },
        seeds: {
            directory: `./knex/seeds`
        }
    },
    staging: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./knex/migrations`
        },
        seeds: {
            directory: `./knex/seeds`
        }
    },
    production: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./knex/migrations`
        },
        seeds: {
            directory: `./knex/seeds`
        }
    }
};
