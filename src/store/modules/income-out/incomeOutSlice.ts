import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Income } from '../../../pages/Register/Register';

const initialState: Income[] = [];

const incomeOutSlice = createSlice({
  name: 'incomeIn',
  initialState: initialState,
  reducers: {
    addIncomeOut: (state, action: PayloadAction<Income>) => {
      const newState = [...state, action.payload];
      return newState;
    },

    removeIncomeOut: (state, action: PayloadAction<string>) => {
      const filtered = state.filter((income) => income.uid !== action.payload);
      return filtered;
    },
  },
});

export const { addIncomeOut, removeIncomeOut } = incomeOutSlice.actions;
export default incomeOutSlice.reducer;
export const selectIncomeIn = (state: RootState) => state.incomeIn;
