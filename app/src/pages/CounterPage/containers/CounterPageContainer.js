import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import CounterPageLayout from "../components/CounterPageLayout";
import {
  CREATE_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  REMOVE_COUNTER,
  REMOVE_COUNTERS
} from "../actions";

const CounterPageContainer = () => {
  const dispatch = useDispatch();
  const countersState = useSelector(
    state => state.counterManagerReducer.counters
  );
  const number = useMemo(() => {
    return countersState.length;
  }, [countersState]);

  const sumCounterValue = useMemo(() => {
    return countersState.reduce((sum, counter) => {
      return sum + counter.countValue;
    }, 0);
  }, [countersState]);

  const handleDecrement = useCallback(
    index => {
      const findCounter = countersState[index];
      if (findCounter.countValue > 0) {
        dispatch(DECREMENT_COUNTER(index));
      }
    },
    [dispatch, countersState]
  );

  const handleIncrement = useCallback(
    index => {
      dispatch(INCREMENT_COUNTER(index));
    },
    [dispatch, countersState]
  );

  const handleReset = useCallback(
    index => {
      dispatch(RESET_COUNTER(index));
    },
    [dispatch, countersState]
  );

  const handleRemove = useCallback(
    index => {
      dispatch(REMOVE_COUNTER(index));
    },
    [dispatch, countersState]
  );

  const handleAddCounter = useCallback(() => {
    dispatch(CREATE_COUNTER());
  }, [dispatch]);

  const handleRemoveCounters = useCallback(() => {
    dispatch(REMOVE_COUNTERS());
  }, []);

  return (
    <CounterPageLayout
      countersState={countersState}
      handleDecrement={index => handleDecrement(index)}
      handleIncrement={index => handleIncrement(index)}
      handleReset={index => handleReset(index)}
      handleAddCounter={handleAddCounter}
      handleRemoveCounters={handleRemoveCounters}
      handleRemove={index => handleRemove(index)}
      numberCounter={number}
      sumCounterValue={sumCounterValue}
    />
  );
};

export default CounterPageContainer;
