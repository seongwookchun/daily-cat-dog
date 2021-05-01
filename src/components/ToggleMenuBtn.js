import React, { useEffect, useState } from 'react';
import './ToggleMenuBtn.css';

const ToggleMenuBtn = (props) => {
  const [state, setState] = useState(props.stateToggle);
  return (
    <div class="toggleMenuBtn">
      <input type="checkbox" id={props.id} checked={props.stateToggle}></input>
      <label for={props.id} onClick={props.toggleSidebar}>
        <span style={{ 'background-color': props.color }}></span>
        <span style={{ 'background-color': props.color }}></span>
        <span style={{ 'background-color': props.color }}></span>
      </label>
    </div>
  );
};

export default ToggleMenuBtn;
