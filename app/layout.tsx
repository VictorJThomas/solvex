import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/modal-provider";

const font = Quantico({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "User Management",
  description: "App de manejo de usuarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
          <ModalProvider />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
