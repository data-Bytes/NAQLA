// src/services/types.ts
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
