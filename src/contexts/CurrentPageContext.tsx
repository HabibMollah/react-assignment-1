import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CurrentPageContextType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const CurrentPageContext = createContext<null | CurrentPageContextType>(
  null,
);

export function CurrentPageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
