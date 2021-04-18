import React, { useState, useEffect, useCallback, useMemo } from "react";

import CounterPageLayout from "../components/CounterPageLayout";

const CounterPageContainer = () => {
  const [countersState, setCounterState] = useState([]);

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
      const counterCopy = [...countersState];
      const findCounter = counterCopy[index];
      if (findCounter.countValue > 0) {
        findCounter.countValue = findCounter.countValue - 1;
        setCounterState(() => counterCopy, setTypeParity());
      }
    },
    [countersState]
  );

  const handleIncrement = useCallback(
    index => {
      const countersCopy = [...countersState];
      const findCounter = countersCopy[index];
      findCounter.countValue = findCounter.countValue + 1;
      setCounterState(() => countersCopy, setTypeParity());
    },
    [countersState]
  );

  const handleReset = useCallback(
    index => {
      const countersCopy = [...countersState];
      const findCounter = countersCopy[index];
      findCounter.countValue = 0;
      setCounterState(() => countersCopy, setTypeParity());
    },
    [countersState]
  );

  const setTypeParity = () => {
    const countersCopy = [...countersState];
    countersCopy.map(counter => {
      const parityType = counter.countValue % 2 === 0 ? "even" : "odd";
      counter.parityType = parityType;
    });
    setCounterState(countersCopy);
  };

  const handleRemove = useCallback(
    index => {
      const countersCopy = [...countersState];
      countersCopy.splice(index, 1);
      countersCopy.forEach(counter => {
        counter.countValue =
          counter.countValue % 2 !== 0
            ? counter.countValue - 1
            : counter.countValue;
        return { ...counter };
      });
      setCounterState(() => countersCopy, setTypeParity());
    },
    [countersState]
  );

  const handleAddCounter = useCallback(() => {
    const newCounter = { countValue: 0, parityType: "even" };
    const countersCopy = [...countersState];

    if (countersCopy.length !== 0) {
      countersCopy.forEach(counter => {
        counter.countValue =
          counter.countValue % 2 === 0
            ? counter.countValue + 1
            : counter.countValue;
        return { ...counter };
      });
    }
    setCounterState(() => [...countersCopy, newCounter], setTypeParity());
  }, [countersState]);

  const handleRemoveCounters = useCallback(() => {
    setCounterState([]);
  }, [countersState]);

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
