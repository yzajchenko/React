import React from "react";

import "./styles.css";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  parityType,
  handleRemove
}) => {
  let countType =
    parityType === "even" ? "Введено четное число" : "Введено нечетное число";
  return (
    <>
      <div className="count">
        <div className="btn-remove">
          <button onClick={handleRemove}>&#10006;</button>
        </div>
        <div className="container">
          <div
            className="count__value count__value-number"
            style={{ background: parityType === "even" ? "aqua" : "beige" }}
          >
            {countValue}
          </div>
          <div className="count__value">{countType}</div>
          <div className="count__button">
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Counter);
