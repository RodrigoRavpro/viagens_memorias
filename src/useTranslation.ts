import { useState, useCallback } from "react";
import { translations, detectLocale, type Locale, type TranslationKeys } from "./i18n";

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  const t = useCallback(
    (key: TranslationKeys): string => translations[locale][key],
    [locale]
  );

  const changeLocale = useCallback((next: Locale) => setLocale(next), []);

  return { t, locale, changeLocale };
}
