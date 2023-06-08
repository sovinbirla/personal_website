import React from 'react';
import {Link} from "react-router-dom";

function Layout ({ children }){
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
