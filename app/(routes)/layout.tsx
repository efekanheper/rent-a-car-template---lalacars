import React from "react";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
interface RootLayoutProps {
  children: React.ReactNode;
}
const RouterLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RouterLayout;
