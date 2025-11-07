import React from "react";
import { Button, LogoMark } from "./ui";
import type { User } from "../services/auth";
import { useCourses } from "../hooks/useCourses";

interface DashboardPageProps {
  user: User;
  onLogout: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  const { userQuery, coursesQuery } = useCourses(user.token);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur">
        <LogoMark />
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-gray-600 sm:block">
            Hi, <strong>{userQuery.data?.fullname || user.username}</strong>
          </span>
          <Button onClick={onLogout} className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            Log out
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>

        {coursesQuery.isLoading && <p className="mt-4 text-gray-600">Loading courses...</p>}
        {coursesQuery.isError && (
          <p className="mt-4 text-red-600">Error: {(coursesQuery.error as Error)?.message}</p>
        )}

        {coursesQuery.data && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coursesQuery.data.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">{course.fullname}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                  {course.summary?.replace(/(<([^>]+)>)/gi, "") || "No description"}
                </p>
                <a
                  href={`${"http://localhost:8080"}/course/view.php?id=${course.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-indigo-600 hover:underline"
                >
                  Open Course →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
