import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;
