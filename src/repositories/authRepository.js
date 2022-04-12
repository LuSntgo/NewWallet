import connection from "../database.js";

export async function login({ email }) {
  await connection.query(`
  SELECT * FROM "users" 
    WHERE "email"=$1`, [email]);
}
