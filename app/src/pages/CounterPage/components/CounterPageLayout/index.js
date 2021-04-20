import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Routes from "../../../../routes/routesNames";
import NextPage from "../../../../comonComponents/NextPage";
import Counter from "../Counter";

import "./styles.css";

const CounterPageLayout = ({
  countersState,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleAddCounter,
  handleRemove,
  handleRemoveCounters,
  numberCounter,
  sumCounterValue
}) => {
  return (
    <>
      <Link to={Routes.HOME_PAGE}>
        <NextPage page="Home page" />
      </Link>
      <div className="btn">
        <button onClick={handleAddCounter}>Add Counter</button>
        <button onClick={handleRemoveCounters}>Reset</button>
      </div>
      <div className="information-counters">
        <div>Number of counters on the screen :{numberCounter}</div>
        <div>The sum of the values of all counters :{sumCounterValue}</div>
      </div>
      <div className="counter-container">
        {countersState.map((counter, index) => (
          <Counter
            key={index}
            countValue={counter.countValue}
            parityType={counter.parityType}
            handleDecrement={() => handleDecrement(index)}
            handleIncrement={() => handleIncrement(index)}
            handleReset={() => handleReset(index)}
            handleRemove={() => handleRemove(index)}
          />
        ))}
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

export default React.memo(CounterPageLayout);
