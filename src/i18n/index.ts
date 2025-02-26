import en from './translations/en';
import uk from './translations/uk';

export const translations = {
  en,
  uk
};

export type Locale = keyof typeof translations;