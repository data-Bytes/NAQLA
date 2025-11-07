// src/api/moodleClient.ts

// const moodleClient = axios.create({
//   baseURL: "http://localhost:8080",
//   timeout: 10000,
// });

// moodleClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token && config.url?.includes("/webservice/")) {
//     config.params = {
//       ...config.params,
//       wstoken: token,
//       moodlewsrestformat: "json",
//     };
//   }
//   return config;
// });

// export default moodleClient;
// src/services/apiClient.ts
export const MOODLE_URL = "http://localhost:8080"; // adjust to your Moodle host

export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}
