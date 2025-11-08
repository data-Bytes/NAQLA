// src/services/auth.ts
import { apiFetch, MOODLE_URL } from "./moodleClient";

export interface User {
  username: string;
  token: string;
}

export interface LoginResponse {
  token: string;
  privatetoken?: string;
  error?: string;
}

export async function loginToMoodle(
  username: string,
  password: string
): Promise<User> {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("service", "auth");

  const data = await apiFetch<LoginResponse>(`${MOODLE_URL}/login/token.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });

  if (data.error) throw new Error(data.error);
  if (!data.token) throw new Error("Invalid credentials");

  const user = { username, token: data.token };
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export function getCurrentUser(): User | null {
  const stored = localStorage.getItem("user");
  return stored ? (JSON.parse(stored) as User) : null;
}

export function logoutUser() {
  localStorage.removeItem("user");
  window.location.replace("/login");
}
