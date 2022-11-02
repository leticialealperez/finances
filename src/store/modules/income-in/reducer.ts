import { Income } from '../types';
import { IncomeInAction } from './actions';

const defaultState: Income[] = [];

export default function incomeIn(state = defaultState, action: IncomeInAction) {
  switch (action.type) {
    case 'income-in/GET':
      return state;

    case 'income-in/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}
