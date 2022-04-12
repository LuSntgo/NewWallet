import bcrypt from "bcrypt";
import * as authRepository from "../user/authRepository.js";

export async function signIn({ email, password }) {
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401);
      }
      await authRepository.login({ email, password });
  }
  