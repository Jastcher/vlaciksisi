import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "idevlakpozor",
  description: "Created by me"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>

        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
        </div>
        
        <NavBar/>

      </body>

    </html>
  );
}
