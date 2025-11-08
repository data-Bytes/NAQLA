import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin"; 

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const registerMutation = useRegister();
  const loginMutation = useLogin();

  const [form, setForm] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    registerMutation.mutate(form, {
      onSuccess: async () => {
        loginMutation.mutate(
          { username: form.username, password: form.password },
          {
            onSuccess: () => window.location.replace("/"),
            onError: () => navigate("/login"),
          }
        );
      },
    });
  };

  const isLoading = registerMutation.isPending || loginMutation.isPending;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {["firstname", "lastname", "username", "email", "password"].map(
          (field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={(form as any)[field]}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>
          )
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        {/* ✅ Error / success messages */}
        {registerMutation.isError && (
          <p className="text-center text-sm mt-2 text-red-600">
            Error: {registerMutation.error.message}
          </p>
        )}
        {registerMutation.isSuccess && !loginMutation.isPending && (
          <p className="text-center text-sm mt-2 text-green-600">
            Registration successful!
          </p>
        )}
      </form>
    </div>
  );
};
