
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/translations";

export type LanguageCode = "en" | "es" | "la";

export interface Language {
  code: LanguageCode;
  name: string;
}

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  translate: (key: string) => string;
  languages: Language[];
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "la", name: "Latin" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode | null;
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem("language", code);
  };

  const translate = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
