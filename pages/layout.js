import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar';

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentTip, setCurrentTip]=useState()

 

  return (
    <div>
    <Sidebar/>
    <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;