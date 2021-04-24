import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  counters: []
};

const counterManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: state => {
      const newCounter = { countValue: 0 };
      const countersCopy = [...state.counters];

      if (countersCopy.length !== 0) {
        countersCopy.forEach(counter => {
          counter.countValue =
            counter.countValue % 2 === 0
              ? counter.countValue + 1
              : counter.countValue;
          return { ...counter };
        });
      }
      return {
        ...state.counters,
        counters: [...countersCopy, newCounter]
      };
    },
    [actions.DECREMENT_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const findCounter = counterCopy[payload];
      findCounter.countValue = findCounter.countValue - 1;
      return {
        ...state,
        counters: counterCopy
      };
    },
    [actions.INCREMENT_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const findCounter = counterCopy[payload];
      findCounter.countValue = findCounter.countValue + 1;
      return {
        ...state,
        counters: counterCopy
      };
    },
    [actions.RESET_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const findCounter = counterCopy[payload];
      findCounter.countValue = 0;
      return {
        ...state,
        counters: counterCopy
      };
    },
    [actions.REMOVE_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      counterCopy.splice(payload, 1);
      counterCopy.forEach(counter => {
        counter.countValue =
          counter.countValue % 2 !== 0
            ? counter.countValue - 1
            : counter.countValue;
        return { ...counter };
      });
      return {
        ...state,
        counters: counterCopy
      };
    },
    [actions.REMOVE_COUNTERS]: (state, { payload }) => {
      return {
        ...state,
        counters: []
      };
    }
  },
  initialState
);

export default counterManagerReducer;
