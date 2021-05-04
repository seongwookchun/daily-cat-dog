import React from 'react';
import './Board.css';

const category = [
  { name: 'eating', nameKo: '식사', icon: '🍴' },
  { name: 'medicine', nameKo: '약', icon: '💊' },
  { name: 'bathroom', nameKo: '대소변', icon: '🚻' },
  { name: 'exercise', nameKo: '운동', icon: '⚽' },
  { name: 'care', nameKo: '케어', icon: '🐶' },
  { name: 'hostpital', nameKo: '진료', icon: '🏥' },
];
const Board = () => {
  return (
    <div className="page-board-layout">
      <div className="page-title">
        <h1>📝기록하기</h1>
      </div>
      <div className="category-wrapper">
        {category.map(({ name, nameKo, icon }) => (
          <div className={'category category-' + String(name)}>
            <dl>
              <dt>{icon}</dt>
              <dd>{nameKo}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
