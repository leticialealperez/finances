import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Income } from '../../../pages/Register/Register';

const initialState: Income[] = [];

const incomeInSlice = createSlice({
  name: 'incomeIn',
  initialState: initialState,
  reducers: {
    addIncomeIn: (state, action: PayloadAction<Income>) => {
        const newState = [...state, action.payload];
        return newState;
    },

    removeIncomeIn: (state, action: PayloadAction<string>) => {
        const filtered = state.filter((income) => income.uid !== action.payload);
        return filtered;
    }
  },
});

export const { addIncomeIn, removeIncomeIn } = incomeInSlice.actions;
export default incomeInSlice.reducer;