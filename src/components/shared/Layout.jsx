import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({title, children}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container mt-5">
      <Header title={title}/>

      <div className="container">
        {children}
      </div>

      <Footer/>
    </div>
  );
};
 
export default Layout;