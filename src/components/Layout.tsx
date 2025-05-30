// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode; onNavigate?: (section: string) => void }> = ({
  children,
  onNavigate,
}) => {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
