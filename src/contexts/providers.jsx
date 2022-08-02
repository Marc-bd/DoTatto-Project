import React from "react";

import { SearchProvider } from "./SearchContext";

const Providers = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default Providers;
