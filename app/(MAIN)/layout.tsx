import React from "react";
import ThemeProvider from "@/components/dashboard/ThemeProvider";
import Sidebar from "@/components/dashboard/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-[#0a0f14]">
        <Sidebar />
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </ThemeProvider>
  );
}
