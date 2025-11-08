export interface MoodleUser {
  id: number;
  fullname: string;
  username: string;
}

export interface MoodleCourse {
  id: number;
  shortname: string;
  fullname: string;
  summary?: string;
}

export interface RegisterData {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
}
