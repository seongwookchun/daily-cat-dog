import React, { useState } from 'react';
import './Header.css';
import ToggleMenuBtn from '../components/ToggleMenuBtn';
// import Sidebar from '../components/Sidebar';

import { Link } from "react-router-dom";


const Header = () => {
	const [stateSidebar, setStateSidebar] = useState(false);
	// const e = document.querySelector('.sidebar-area');
	const toggleSidebar = () => {
		// e.style.display = 'block' ? e.style.display === 'none' : 'none';
		// console.log(`e: ${e}`);
		// alert('hi')
		if (stateSidebar === true) {
			setStateSidebar(false);
		}
		else {
			setStateSidebar(true)
		} 
	}
	
	return (
		<header>
			<div class="wrapper">
				<div class="widget-area">
					<ToggleMenuBtn id="menuicon" color="white" clickHandler='' />
					<button>show</button>
				</div>
				<div class="sidebar-area">
					
				</div>
			</div>
		</header>
			
	)
}

export default Header;