module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'ac_twitter_workspace',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'ac_twitter_workspace',
    host: 'host.docker.internal',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  RDS: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql'
  }
}
