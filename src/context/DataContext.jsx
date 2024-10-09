// context/DataContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    category: '',
    description: '',
    budget: ''
  })

  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};
