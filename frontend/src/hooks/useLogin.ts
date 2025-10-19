// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginToMoodle, type User } from "../services/auth";

export function useLogin() {
  return useMutation<User, Error, { username: string; password: string }>({
    mutationFn: ({ username, password }) => loginToMoodle(username, password),
  });
}
