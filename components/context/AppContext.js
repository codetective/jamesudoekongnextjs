import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const GeneralContext = React.createContext();

export function useCtx() {
  return useContext(GeneralContext);
}

const GeneralProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const StoreAuth = () => {
    setAuth(true);
  };

  return (
    <GeneralContext.Provider
      value={{
        isAuth,
        StoreAuth,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralProvider;
