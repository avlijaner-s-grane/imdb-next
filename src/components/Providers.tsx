"use client";

import { ThemeProvider } from "next-themes";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
}

export default Providers;
