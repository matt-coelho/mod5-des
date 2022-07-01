import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const srv = process.env.MONGO_SRV
const pss = process.env.MONGO_PASS

const dburl = `mongodb+srv://${srv}:${pss}@cluster0.lnxaw.mongodb.net/?retryWrites=true&w=majority`

export function getConn() {
  return new mongodb.MongoClient(dburl)
}
