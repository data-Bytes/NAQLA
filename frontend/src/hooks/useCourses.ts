import { useQuery } from "@tanstack/react-query";
import { getSiteInfo, getUserCourses } from "../services/moodle";
import type { MoodleCourse, MoodleUser } from "../services/types";

export function useCourses(token: string) {
  const userQuery = useQuery<MoodleUser>({
    queryKey: ["user", token],
    queryFn: () => getSiteInfo(token),
    enabled: !!token,
  });

  const coursesQuery = useQuery<MoodleCourse[]>({
    queryKey: ["courses", userQuery.data?.id],
    queryFn: () => getUserCourses(token, userQuery.data!.id),
    enabled: !!userQuery.data,
  });

  return { userQuery, coursesQuery };
}
