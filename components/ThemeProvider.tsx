"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Always animate — motion is core to the site, even if the OS asks to reduce it */}
      <MotionConfig reducedMotion="never">{children}</MotionConfig>
    </NextThemeProvider>
  );
}
