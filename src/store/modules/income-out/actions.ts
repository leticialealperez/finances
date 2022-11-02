import { Income } from '../types';

export interface IncomeOutAction {
  type: 'income-out/GET' | 'income-out/SET';
  payload: Income;
}

export function getIncomeOut(payload: Income) {
  return {
    type: 'income-out/GET',
    payload,
  };
}

export function setIncomeOut(payload: Income) {
  return {
    type: 'income-out/SET',
    payload,
  };
}
