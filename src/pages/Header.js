import React, { useState, useEffect } from 'react';
import './Header.css';
import ToggleMenuBtn from '../components/ToggleMenuBtn';
// import Sidebar from '../components/Sidebar';

import { Link } from 'react-router-dom';

const sidebarItems = [
  {
    name: 'λμλ³΄λ',
    path: 'dashboard',
    icon: 'π',
  },
  {
    name: 'κΈ°λ‘νκΈ°',
    path: 'board',
    icon: 'π',
  },
  {
    name: 'λ©λ₯μ΄',
    path: 'petinfos',
    icon: 'π±',
  },
  {
    name: 'μ§μ¬',
    path: 'guardian',
    icon: 'π€΅',
  },
  {
    name: 'μ¬λ°μ μΈ‘μ ',
    path: 'beat',
    icon: 'π',
  },
  {
    name: 'μ€μ ',
    path: 'settings',
    icon: 'βοΈ',
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
