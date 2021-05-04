import React, { useState, useEffect } from 'react';
import { PouchDB, useFind, useAllDocs, useDB } from 'react-pouchdb';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';
import {
  category as archCategory,
  categoryIconDic,
} from '../architecture/category';

const CATEGORIES = Object.entries(categoryIconDic);
CATEGORIES.push(['all', '❌']);
console.log(CATEGORIES);
const Dashboard = () => {
  const dispatch = useDispatch();
  const [stateBtnEA, setStateBtnEA] = useState(false);
  const { timestamp, category } = useSelector(({ timeline }) => timeline);
  const [_ts, set_ts] = useState(timestamp);
  const [_ct, set_ct] = useState(category);
  const toggleBtnEA = () => setStateBtnEA(!stateBtnEA);
  const filterCategory = (q) => {
    // q : text
    if (q === 'all') {
      set_ts(timestamp);
      set_ct(category);
      return;
    }
    const indice = new Array();
    for (let i = 0; i < category.length; i++) {
      if (category[i] === q) {
        indice.push(i);
      }
    }
    let newTs = indice.map((i) => timestamp[i]);
    let newCt = indice.map((i) => category[i]);
    set_ts(newTs);
    set_ct(newCt);
    return indice.map((i) => [timestamp[i], category[i]]);
  };
  const FilterBtn = ({ text, icon }) => {
    return (
      <li
        onClick={() => {
          const res = filterCategory(text);
          // set
          console.log(`res: ${res}`);
          // dispatch({
          //   type: 'ASSIGN_CATEGORY',
          //   newItem: res,
          // });
          toggleBtnEA();
        }}
      >
        {icon}
      </li>
    );
  };

  return (
    <section className="page-dashboard-layout">
      <div className="dashboard page-title">
        <h1 onClick={() => console.log('hi')}>대시보드</h1>
      </div>
      <div
        className="btn-extra-action"
        onClick={(e) => {
          toggleBtnEA();
          console.log(`label ${stateBtnEA}`);
        }}
      >
        <span>+</span>
        <input
          type="checkbox"
          name="inp-btn-extra-action"
          onClick={(e) => {
            console.log(`input ${e.target.checked}`);
          }}
        />
        <label
          for="inp-btn-extra-action"
          onClick={(e) => {
            toggleBtnEA();
            console.log(`label ${stateBtnEA}`);
          }}
        ></label>
      </div>
      <div
        className="extra-action-bar"
        style={{ visibility: stateBtnEA === true ? 'visible' : 'hidden' }}
      >
        <div>필터</div>
        <ul>
          {CATEGORIES.map(([t, i]) => (
            <FilterBtn text={t} icon={i} />
          ))}
        </ul>
      </div>
      <div className="dashboard timeline-wrapper">
        <ul>
          {_ts.map((e, i) => (
            <li>
              <div className="timeline-timestamp">{e}</div>
              <div className="timeline-category-icon">
                {categoryIconDic[_ct[i]]}
              </div>
              <div className="timeline-category">{_ct[i]}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
