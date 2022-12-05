import { createContext, PropsWithChildren, useState } from "react";

type LanguageContextType = {
  language: "Português" | "English";
  changeLanguage: (language: "Português" | "English") => void
};

//test

export const LanguageContext = createContext({} as LanguageContextType);

export default function LanguageContextProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<"Português" | "English">("Português");

  function changeLanguage(language: "Português" | "English") {
    setLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
  );
}
