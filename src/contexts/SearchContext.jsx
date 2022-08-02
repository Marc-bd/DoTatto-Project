import { createContext, useState } from "react";

export const SearchContext = createContext([]);

export const SearchProvider = ({ children }) => {
  const [arrInfo, setArrInfo] = useState([]);

  return (
    <SearchContext.Provider value={{ arrInfo, setArrInfo }}>
      {children}
    </SearchContext.Provider>
  );
};
