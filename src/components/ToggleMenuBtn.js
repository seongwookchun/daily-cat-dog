import React from 'react';
import './ToggleMenuBtn.css';


const ToggleMenuBtn = (props) => {
	return (
		<div class="toggleMenuBtn">
			<input type="checkbox" id={props.id}></input>
			<label for="menuicon" onClick={props.clickHandler}>
				<span style={{"background-color": props.color}}></span>
				<span style={{"background-color": props.color}}></span>
				<span style={{"background-color": props.color}}></span>
			</label>
		</div>
	)
}

export default ToggleMenuBtn;