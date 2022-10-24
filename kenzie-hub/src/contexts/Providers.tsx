import React from "react";
import { AuthProvider } from "./AuthContext";
import { DashboardProvider } from "./DashboardContext";

interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return (
    <AuthProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </AuthProvider>
  );
};

export default Providers;
