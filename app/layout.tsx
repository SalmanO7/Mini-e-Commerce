import ProductProvider from "@/contexts/ProductContext";
import SidebarProvider from "@/contexts/SideBarContext";
import CartProvider from "@/contexts/CartContext";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = ({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Created by Muhammad Salman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full  `}
      >
        <SidebarProvider>
          <CartProvider>
            <ProductProvider>
              {children}
            </ProductProvider>
          </CartProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
