"use client";
import React, { createContext, useContext } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ value, children }) => {
  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  return useContext(ViewportContext);
};
