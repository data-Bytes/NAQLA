import { MOODLE_URL } from "./moodleClient";
import type { RegisterData } from "./types";
import axios from "axios";


export async function registerToMoodle(userData: RegisterData) {
  const url = `${MOODLE_URL}/webservice/rest/server.php`;

  const params = new URLSearchParams();
  params.append("wsfunction", "core_user_create_users");
  params.append("moodlewsrestformat", "json");

  // use a valid token from an admin or dedicated service with signup permission
  params.append("wstoken", "ff8de2b8c390ce392b359f82a0f0b180");

  // core_user_create_users expects parameters inside "user" array
  params.append("users[0][username]", userData.username);
  params.append("users[0][password]", userData.password);
  params.append("users[0][firstname]", userData.firstname);
  params.append("users[0][lastname]", userData.lastname);
  params.append("users[0][email]", userData.email);
  params.append("users[0][auth]", "manual"); // Moodle requires an auth method

  const res = await axios.post(url, params.toString(), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (res.data?.exception) throw new Error(res.data.message);
  return res.data;
}
