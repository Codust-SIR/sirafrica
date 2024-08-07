import type { Metadata } from "next";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIR | Our Team",
  description: "",
  icons: { icon: "/sirafrica_logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
