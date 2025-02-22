"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);

  useEffect(() => {
    if (loadingCount <= 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [loadingCount]);

  const startLoading = () => {
    setLoadingCount((prev) => prev + 1);
  };

  const finishLoading = () => {
    setLoadingCount((prev) => Math.max(prev - 1, 0));
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, finishLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
