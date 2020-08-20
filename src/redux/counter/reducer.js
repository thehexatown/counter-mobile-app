import {NUMBER_CHANGED} from './types';

const initialState = {
  number: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_CHANGED:
      return {
        ...state,
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

export default CounterReducer
