require('dotenv').config()

const config={
  dev: process.env.MODE === 'dev',
  port: process.env.PORT || 4000,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  jwt_secret: process.env.JWT_SECRET
}

module.exports= config