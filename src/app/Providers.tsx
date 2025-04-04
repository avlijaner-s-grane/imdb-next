"use client";

import { ThemeProvider } from "next-themes";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
}

export default Providers;
