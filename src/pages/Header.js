import React, { useState, useEffect } from 'react';
import './Header.css';
import ToggleMenuBtn from '../components/ToggleMenuBtn';
// import Sidebar from '../components/Sidebar';

import { Link } from 'react-router-dom';

const sidebarItems = [
  {
    name: '대시보드',
    path: 'dashboard',
    icon: '📊',
  },
  {
    name: '기록하기',
    path: 'board',
    icon: '📝',
  },
  {
    name: '멍냥이',
    path: 'petinfos',
    icon: '🐱',
  },
  {
    name: '집사',
    path: 'guardian',
    icon: '🤵',
  },
  {
    name: '심박수 측정',
    path: 'beat',
    icon: '💓',
  },
  {
    name: '설정',
    path: 'settings',
    icon: '⚙️',
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
            {sidebarItems.map(({ path, name, icon }) => (
              <li>
                <Link to={path} onClick={toggleSidebar}>
                  {icon} {name}
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
