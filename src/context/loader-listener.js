import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState({});

  const setLoading = (key, isLoading) => {
    setLoadingStates((prev) => ({ ...prev, [key]: isLoading }));
  };

  const isReady = Object.values(loadingStates).every(
    (state) => state === false,
  );

  return (
    <LoaderContext.Provider value={{ setLoading, isReady }}>
      {children}
    </LoaderContext.Provider>
  );
};
