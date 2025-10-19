// src/App.tsx
import  { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./pages/Login";
import { DashboardPage } from "./pages/Dashboard";
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
      {!user ? <LoginPage onLoggedIn={setUser} /> : <DashboardPage user={user} onLogout={handleLogout} />}
    </QueryClientProvider>
  );
}
