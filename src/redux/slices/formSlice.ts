import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormSlice = {
  showForm: boolean;
};

const initialState: FormSlice = {
  showForm: false,
};

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setShowForm: (state, action: PayloadAction<boolean>) => {
      state.showForm = action.payload;
    },
  },
});

export const { setShowForm } = formSlice.actions;
export default formSlice.reducer;
