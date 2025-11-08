// App.tsx
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { DashboardPage } from "./pages/Dashboard";
import { RegisterPage } from "./pages/RegisterPage";
import { getCurrentUser, logoutUser, type User } from "./services/auth";

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<LoginPage onLoggedIn={setUser} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage onLoggedIn={setUser} />} />
            </>
          ) : (
            <Route
              path="/"
              element={<DashboardPage user={user} onLogout={handleLogout} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
