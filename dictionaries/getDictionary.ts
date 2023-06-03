import 'server-only'
import type { Locale } from '../i18n-config'


const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()