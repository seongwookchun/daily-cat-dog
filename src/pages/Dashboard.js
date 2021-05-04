import React, { useState, useEffect } from 'react';
import { PouchDB, useFind, useAllDocs, useDB } from 'react-pouchdb';
import { useSelector, dispatch } from 'react-redux';
import './Dashboard.css';

const Dashboard = () => {
  const { timestamp, category } = useSelector(({ timeline }) => timeline);

  return (
    <section className="page-dashboard-layout">
      <div className="dashboard page-title">
        <h1>대시보드</h1>
      </div>
      <div className="dashboard timeline-wrapper">
        <ul>
          {timestamp.map((e, i) => (
            <li>
              <div className="timeline-timestamp">{e}</div>
              <div className="timeline-category">{category[i]}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
