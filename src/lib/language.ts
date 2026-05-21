import { useEffect, useState } from "react";

export type Language = "en" | "pt-BR";

const STORAGE_KEY = "pg-site-language";

function detectDefaultLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("pt") ? "pt-BR" : "en";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt-BR") return stored;
    return detectDefaultLanguage();
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return { language, setLanguage };
}
