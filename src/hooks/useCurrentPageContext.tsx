import { useContext } from "react";
import { CurrentPageContext } from "../contexts/CurrentPageContext";

export default function useCurrentPageContext() {
  const context = useContext(CurrentPageContext);
  if (context === null) {
    throw new Error(
      "useCurrentPageContext must be used within a CurrentPageContextProvider",
    );
  }
  return context;
}
