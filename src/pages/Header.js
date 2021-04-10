import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";


const Header = () => {
	return (
		<header>
			<div class="widget-area">
				<i class="fab fa-twitter"></i>
			</div>
			<div class="menu-btn-area">
				<i class="fas fa-bars"></i>
				<input id="ckbx-bars" type="checkbox" value=""></input>
				<nav class="side-menu-area">
				<ul>
					<Link to="/dashboard"><li>대시보드</li></Link>
					<Link to="/cat-dog"><li>댕냥이</li></Link>
					<Link to="/guardian"><li>집사</li></Link>
					<Link to="/settings"><li>설정</li></Link>
				</ul>
			</nav>
			</div>
			
		</header>
	)
}

export default Header;