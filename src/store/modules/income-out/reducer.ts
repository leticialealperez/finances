import { Income } from '../types';
import { IncomeOutAction } from './actions';

const defaultState: Income[] = [];

export default function incomeOut(state = defaultState, action: IncomeOutAction) {
  switch (action.type) {
    case 'income-out/GET':
      return state;

    case 'income-out/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}
