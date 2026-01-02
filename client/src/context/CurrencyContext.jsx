import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CurrencyContext = createContext();

const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  AUD: 'A$',
  CAD: 'C$',
  JPY: '¥',
  CNY: '¥',
  AED: 'د.إ',
  SAR: '﷼',
  CHF: 'CHF',
};

const BASE_PRICE = 500; // USD
const BASE_DISCOUNT = 1000; // USD
const DEFAULT_CURRENCY = 'USD';

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const initializeCurrency = async () => {
      try {
        // 1. Get User's Currency from IP
        let userCurrency = DEFAULT_CURRENCY;
        const cachedCurrency = sessionStorage.getItem('userCurrency');
        
        if (cachedCurrency) {
          userCurrency = cachedCurrency;
        } else {
          const ipResponse = await fetch('https://ipapi.co/json/');
          const ipData = await ipResponse.json();
          if (ipData.currency) {
            userCurrency = ipData.currency;
            sessionStorage.setItem('userCurrency', userCurrency);
          }
        }
        setCurrency(userCurrency);

        // 2. Get Real-Time Exchange Rates (Base USD)
        // Using open.er-api.com which is free and doesn't require a key for basic usage
        const rateResponse = await fetch('https://open.er-api.com/v6/latest/USD');
        const rateData = await rateResponse.json();
        
        if (rateData.rates && rateData.rates[userCurrency]) {
          setExchangeRate(rateData.rates[userCurrency]);
        }
      } catch (error) {
        console.error('Error initializing currency data:', error);
        // Fallback for language paths
        const path = location.pathname;
        if (path.startsWith('/it') || path.startsWith('/es') || path.startsWith('/fr') || path.startsWith('/de')) {
          setCurrency('EUR');
          // Rough fallback rate if API fails
          setExchangeRate(0.92);
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeCurrency();
  }, [location.pathname]);

  // Rounding helper for "cleaner" prices (e.g. 462.53 -> 460 or 465)
  const cleanPrice = (amount) => {
    if (amount > 1000) {
      return Math.round(amount / 100) * 100; // Round to nearest 100 for large numbers like INR
    }
    return Math.round(amount / 5) * 5; // Round to nearest 5 for smaller numbers like EUR/GBP
  };

  const currentPrice = cleanPrice(BASE_PRICE * exchangeRate);
  const discountPrice = cleanPrice(BASE_DISCOUNT * exchangeRate);
  const symbol = CURRENCY_SYMBOLS[currency] || currency;

  const formatPrice = (amount) => {
    return `${symbol}${amount.toLocaleString()}`;
  };

  const getRawPrice = (type = 'current') => {
    return type === 'discount' ? discountPrice : currentPrice;
  };

  const value = {
    currency,
    symbol,
    currentPrice,
    discountPrice,
    formatPrice,
    getRawPrice,
    isLoading
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
