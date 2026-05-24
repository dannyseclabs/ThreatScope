"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const value = useMemo(() => ({ query, setQuery }), [query]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useDashboardSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useDashboardSearch must be used inside SearchProvider");
  }

  return context;
}
