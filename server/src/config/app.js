import 'dotenv/config'

export const env = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || '3000',
  APP_NAME: process.env.APP_NAME || '',
  APP_KEY: process.env.APP_KEY || '',
}
