// src/components/LoginPage.tsx
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Input, Button, LogoMark } from "./ui";
import type { User } from "../services/auth";
import { Link } from "react-router-dom";


interface LoginPageProps {
  onLoggedIn: (user: User) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const login = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { username, password },
      {
        onSuccess: (user) => onLoggedIn(user),
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <LogoMark />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2">
        <div className="hidden md:block">
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Welcome back 👋</h1>
          <p className="mt-3 text-gray-600">
            Sign in to access your Moodle account and personalized dashboard.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <button
                    type="button"
                    className="text-xs text-indigo-600 hover:underline"
                    onClick={() => setShowPass((s) => !s)}
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none"
                />
              </div>

              {login.isError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {login.error?.message || "Login failed"}
                </div>
              )}

              <Button
                type="submit"
                className={`w-full bg-indigo-600 text-white hover:bg-indigo-700 ${
                  login.isPending ? "opacity-70" : ""
                }`}
              >
                {login.isPending ? "Signing in..." : "Sign in"}
              </Button>

              <Link to="/register">
                <Button
                  type="button"
                  className="w-full mt-2 bg-gray-100 text-indigo-700 hover:bg-gray-200"
                >
                  Register
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
