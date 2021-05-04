import React from 'react';

items = 
const Dashboard = () => {
	return (
		<section>
			<h1>대시보드</h1>
			<ul>
				{items.map((e, i) => <li>{i}{e}</li>)}
			</ul>
		</section>
	)
}

export default Dashboard;