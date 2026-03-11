import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';
import CookieBanner from '../common/CookieBanner';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
