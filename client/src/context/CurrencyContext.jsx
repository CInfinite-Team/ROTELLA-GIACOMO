import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');
  const location = useLocation();

  useEffect(() => {
    // Determine currency based on URL path
    const path = location.pathname;
    if (path.startsWith('/it')) {
      setCurrency('EUR');
      setSymbol('€');
    } else {
      // Default to USD for /en and others
      setCurrency('USD');
      setSymbol('$');
    }
  }, [location]);

  const formatPrice = (amount) => {
    // Simple conversion logic (placeholder)
    // Assuming base price is USD. 
    // If USD -> EUR : amount * 0.95 (approx)
    // If EUR -> USD : amount * 1.05
    
    // HOWEVER, for this specific request, the user likely wants fixed prices like 500€ vs 500$ 
    // or specific psychological pricing. 
    // I will return the generic formatting for now.
    
    return `${symbol}${amount}`; 
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
