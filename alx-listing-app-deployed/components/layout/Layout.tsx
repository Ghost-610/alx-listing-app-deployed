import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";


// ✅ Define props here in the same file
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;