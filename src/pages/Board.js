import React from 'react';
import './Board.css';
import { getTimestamp } from '../utils/utils';
// import { useDB } from 'react-pouchdb/browser';
import { PouchDB, useFind, useAllDocs, useDB, Get } from 'react-pouchdb';
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../architecture/category';

const Board = () => {
  // const { put, remove } = useDB('clientdb');
  let dispatch = useDispatch(); // why let??
  // const timeline = useSelector((state) => state.timeline);
  const state = useSelector((state) => state);
  console.log(`state: ${state}`);
  // console.log(`state.timeline: ${timeline.timeline}`);
  // console.dir(timeline.timeline);
  const onClickHandler = (category) => {
    console.log(`clicked category ${category}.`);
    const timestamp = getTimestamp();
    console.log(`now: ${timestamp}`);
    console.log(`state:\n${state}`);
    // console.log(`timeline:\n${timeline}`);
    // const doc = {
    //   timestamp,
    //   category,
    // };
    dispatch({
      type: 'APPEND',
      newItem: { timestamp: timestamp, category: category },
      // newItem: category,
    });
  };

  return (
    <section className="page-board-layout">
      <div className="board page-title">
        <h1>📝기록하기</h1>
      </div>
      <div className="category-wrapper">
        {category.map(({ name, nameKo, icon }) => (
          <div
            className={'category category-' + String(name)}
            onClick={() => onClickHandler(nameKo)}
          >
            <dl>
              <dt>{icon}</dt>
              <dd>{nameKo}</dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Board;
