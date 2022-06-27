import mongoose, { mongo } from "mongoose"

async function connect() {
  const url =
    "mongodb+srv://sanctusdominusdeo:WjN5noh0AQ8ReZgY@cluster0.lnxaw.mongodb.net/?retryWrites=true&w=majority"
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

export default connect
