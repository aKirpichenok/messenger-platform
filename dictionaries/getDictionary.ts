import 'server-only'
import type { Locale } from '@/configs/i18n-config'


const dictionaries: { [key: string]: () => Promise<{ [key: string]: { [key: string]: string } }> } = {
  en: () => import('./en.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
}

// export const getDictionary = async (locale: Locale) => dictionaries[locale]()

export const getDictionary = async (locale: Locale) => {
  return locale == 'ru' ? dictionaries.ru() : dictionaries.en();
};