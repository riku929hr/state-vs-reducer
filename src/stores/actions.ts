import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type DeliveryForm } from 'schemas/deliveryForm';

export const initialState: DeliveryForm = {
  zipCode: '',
  prefecture: '',
  city: '',
  address: '',
  building: '',
  wrapping: 'none',
};

export const deliveryFormSlice = createSlice({
  name: 'deliveryForm',
  initialState,
  reducers: {
    reset: () => initialState,
    updated: (state, action: PayloadAction<Partial<DeliveryForm>>) => {
      return { ...state, ...action.payload };
    },
  },
});
