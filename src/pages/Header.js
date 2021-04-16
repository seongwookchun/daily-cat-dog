import React, { useState } from 'react';
import './Header.css';
import ToggleMenuBtn from '../components/ToggleMenuBtn';
// import Sidebar from '../components/Sidebar';

import { Link } from "react-router-dom";

const SidebarItems = [{
	name: '대시보드',
	path: 'dashboard'
}, {
	name: '멍냥이',
	path: 'petinfos'
}, {
	name: '집사',
	path: 'guardian'
}, {
	name: '심박수 측정',
	path: 'beat'
}, {
	name: '설정',
	path: 'settings'
},]

const Header = () => {
	const [stateSidebar, setStateSidebar] = useState('none');
	// const e = document.querySelector('.sidebar-area');

	const toggleSidebar = () => {
		if (stateSidebar === 'none') {
			setStateSidebar('block');
		} else {
			setStateSidebar('none');
		}
	}
	
	return (
		<header>
			<div class="wrapper">
				<div class="widget-area">
					<ToggleMenuBtn id="menuicon" color="white" clickHandler='' toggleSidebar={toggleSidebar} />
					<div class="sidebar-area" style={{display: stateSidebar}}>
						<ul>
							{SidebarItems.map(e => <li><Link to={e.path}>{e.name}</Link></li>)}
						</ul>
					</div>
				</div>
			</div>
		</header>
			
	)
}

export default Header;