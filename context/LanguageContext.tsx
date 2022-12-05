import { createContext, PropsWithChildren, useState } from "react";

type LanguageContextType = {
  language: "Português" | "English";
  changeLanguage: () => void
};

export const LanguageContext = createContext({} as LanguageContextType);

export default function LanguageContextProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<"Português" | "English">("Português");

  function changeLanguage() {
    setLanguage(prevState => prevState === "Português" ? "English" : "Português")
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
  );
}
