import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
