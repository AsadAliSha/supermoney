import React, { createContext, useContext, useState } from 'react';

// Create Context for header state
const HeaderContext = createContext();

// HeaderContext Provider Component
export const HeaderProvider = ({ children }) => {
  const [headerState, setHeaderState] = useState({
    logo: 'white', // default logo (white logo)
    hamburgerColor: true, // default hamburger visibility
  });

  // Function to change the header state (logo and hamburger)
  const setHeader = (newState) => {
    setHeaderState((prevState) => ({ ...prevState, ...newState }));
  };
  return (
    <HeaderContext.Provider value={{ headerState, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook to use the HeaderContext
export const useHeader = () => useContext(HeaderContext);
