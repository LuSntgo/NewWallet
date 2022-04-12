import connection from "../database.js";
import * as userRepository from "../repositories/userRepository.js";

export async function signUp({ name, email, password }) {
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  if (existingUsers.rowCount > 0) {
    return res.sendStatus(409);
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  await userRepository.insert({ name, email, hashedPassword });
}
