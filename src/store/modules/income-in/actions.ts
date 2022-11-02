import { Income } from '../types';

export interface IncomeInAction {
  type: 'income-in/GET' | 'income-in/SET';
  payload: Income;
}

export function getIncomeIn(payload: Income): IncomeInAction {
  return {
    type: 'income-in/GET',
    payload,
  };
}

export function setIncomeIn(payload: Income): IncomeInAction {
  return {
    type: 'income-in/SET',
    payload,
  };
}
