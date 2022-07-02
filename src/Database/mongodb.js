import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const dburl = process.env.MONGO_URI

export function getConn() {
  return new mongodb.MongoClient(dburl)
}
