import pg from "pg"

export async function connect() {
  if (global.connection) {
    return global.connection.connect()
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://iydascqg:OdbRTFG9Fpo1KgoGxULL5T-lUqGMgAT3@fanny.db.elephantsql.com/iydascqg",
  })
  global.connection = pool
  return pool.connect()
}
