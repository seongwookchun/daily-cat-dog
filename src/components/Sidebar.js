import React from 'react';
import './Sidebar.css';


const Sidebar = (props) => {
	return (
		<div>
			<Link to="/login"><li>로그인</li></Link>
			<Link to="/dashboard"><li>대시보드</li></Link>
			<Link to="/cat-dog"><li>댕냥이</li></Link>
			<Link to="/guardian"><li>집사</li></Link>
			<Link to="/settings"><li>설정</li></Link>
		</div>
	)
}

export default Sidebar;