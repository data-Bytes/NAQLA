import axios from "axios";
import type { MoodleCourse, MoodleUser } from "./types";
import { apiFetch } from "./moodleClient";

const MOODLE_URL = "http://localhost:8080/webservice/rest/server.php";
const TOKEN = "dd3dbc1c873450784a393eb9bd30d842"; 

export async function getCourses() {
  const res = await axios.get(MOODLE_URL, {
    params: {
      wstoken: TOKEN,
      wsfunction: "core_course_get_courses",
      moodlewsrestformat: "json"
    }
  });
  return res.data;
}

export async function getSiteInfo(token: string): Promise<MoodleUser> {
  const url = `${MOODLE_URL}/webservice/rest/server.php?wstoken=${token}&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json`;
  const data = await apiFetch<any>(url);
  return {
    id: data.userid,
    fullname: data.fullname,
    username: data.username,
  };
}

export async function getUserCourses(token: string, userId: number): Promise<MoodleCourse[]> {
  const url = `${MOODLE_URL}/webservice/rest/server.php?wstoken=${token}&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=${userId}`;
  return await apiFetch<MoodleCourse[]>(url);
}