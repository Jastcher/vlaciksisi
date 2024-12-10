// src/app/layout.tsx
"use client";

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../providers/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div style={{ minHeight: '95vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
              <Navbar /> 
            </div>
          </ThemeProvider>

        </AuthProvider>
      </body>
    </html>
  );
}
