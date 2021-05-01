import React, { useState, useEffect } from 'react';
import './Header.css';
import ToggleMenuBtn from '../components/ToggleMenuBtn';
// import Sidebar from '../components/Sidebar';

import { Link } from 'react-router-dom';

const sidebarItems = [
  {
    name: '대시보드',
    path: 'dashboard',
  },
  {
    name: '멍냥이',
    path: 'petinfos',
  },
  {
    name: '집사',
    path: 'guardian',
  },
  {
    name: '심박수 측정',
    path: 'beat',
  },
  {
    name: '설정',
    path: 'settings',
  },
];

const Header = () => {
  const [stateSidebar, setStateSidebar] = useState(false);
  const toggleSidebar = () => setStateSidebar(!stateSidebar);

  return (
    <header>
      <div class="widget-area">
        <ToggleMenuBtn
          id="menuicon"
          color="rgba(255,255,255,0.9)"
          clickHandler=""
          stateToggle={stateSidebar}
          toggleSidebar={toggleSidebar}
        />

        <div
          class="sidebar-area"
          style={{ display: stateSidebar === true ? 'block' : 'none' }}
        >
          <ul>
            {sidebarItems.map((e) => (
              <li>
                <Link to={e.path} onClick={toggleSidebar}>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="sidebar-shadow"
        onClick={toggleSidebar}
        style={{ visibility: stateSidebar === true ? 'visible' : 'hidden' }}
      ></div>
    </header>
  );
};

export default Header;
