import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Print UA - Сублімаційний друк",
  description: "Послуги сублімаційного друку на різних поверхнях",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
