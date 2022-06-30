import mongodb from "mongodb"

const dburl =
  "mongodb+srv://sanctusdominusdeo:WjN5noh0AQ8ReZgY@cluster0.lnxaw.mongodb.net/?retryWrites=true&w=majority"

export function getConn() {
  return new mongodb.MongoClient(dburl)
}
