import dotenv from 'dotenv'
dotenv.config()

export const secret =  process.env.SECRET || 'thisisthesecret'
export const port = process.env.PORT || 4000
export const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/picturest-db'