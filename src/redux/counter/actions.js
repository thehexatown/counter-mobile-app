import {NUMBER_CHANGED} from './types';

export const numberChanged = (number) => ({
  type: NUMBER_CHANGED,
  payload: number,
});
