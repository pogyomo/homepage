import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";
import BreadcrumbList from "@/components/BreadcrumbList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className="flex flex-col min-h-screen">
        <Header />
        <BreadcrumbList />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
