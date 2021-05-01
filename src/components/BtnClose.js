import React from 'react';

const BtnClose = ({
  fontFamily,
  fontSize,
  fontWeight,
  color,
  onClickHandler,
}) => {
  return (
    <div
      className="btn-close"
      style={{ fontFamily, fontSize, fontWeight, color, border: '1px' }}
      onClick={() => {
        onClickHandler();
      }}
    >
      X
    </div>
  );
};

export default BtnClose;
