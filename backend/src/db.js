import pg from "pg"

export const pool = new pg.Pool({
user:"postgres",
host:"localhost",
password:"5432",
database:"PCW",
port:"5432"
})

