import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Routes from "../../../../routes/routesNames";
import NextPage from "../../../../comonComponents/NextPage";
import "./styles.css";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  parityType
}) => {
  let typeCount =
    parityType === "even" ? "Введено четное число" : "Введено нечетное число";
  return (
    <>
      <Link to={Routes.HOME_PAGE}>
        <NextPage page="Home page" />
      </Link>
      <div className={"count " + parityType}>
        <div className="count__value count__value-number">{countValue}</div>
        <div className="count__value">{typeCount}</div>
        <div className="count__button">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  parityType: PropTypes.string.isRequired
};

export default Counter;
