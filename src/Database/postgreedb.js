import pg from "pg"
import dotenv from "dotenv"

dotenv.config()
const srv = process.env.PG_SRV
const pss = process.env.PG_PASS

export async function connect() {
  if (global.connection) {
    return global.connection.connect()
  }
  const pool = new pg.Pool({
    connectionString: `postgres://${srv}:${pss}@fanny.db.elephantsql.com/${srv}`,
  })
  global.connection = pool
  return pool.connect()
}
