import app from "./src/app.js"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.HTTP_PORT

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
