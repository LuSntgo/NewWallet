import connection from "../database.js";

export async function insertFinance({user, value, type}) {
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [user.id, value, type]
      );
    }