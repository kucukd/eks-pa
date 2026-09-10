import type { Locale } from "@/lib/i18n"
import {
  actionModel,
  deliveryModel,
  trustBlocks,
  certifications,
  solutions,
  products,
  showcaseProducts,
  sectors,
  insights,
  successStories,
} from "@/lib/content"
import {
  actionModelEn,
  deliveryModelEn,
  trustBlocksEn,
  certificationsEn,
  solutionsEn,
  productsEn,
  showcaseProductsEn,
  sectorsEn,
  insightsEn,
  successStoriesEn,
} from "@/lib/content-en"

export function getContent(locale: Locale) {
  const isEn = locale === "en"
  return {
    actionModel: isEn ? actionModelEn : actionModel,
    deliveryModel: isEn ? deliveryModelEn : deliveryModel,
    trustBlocks: isEn ? trustBlocksEn : trustBlocks,
    certifications: isEn ? certificationsEn : certifications,
    solutions: isEn ? solutionsEn : solutions,
    products: isEn ? productsEn : products,
    showcaseProducts: isEn ? showcaseProductsEn : showcaseProducts,
    sectors: isEn ? sectorsEn : sectors,
    insights: isEn ? insightsEn : insights,
    successStories: isEn ? successStoriesEn : successStories,
  }
}

export function getSolutions(locale: Locale) {
  return locale === "en" ? solutionsEn : solutions
}
export function getProducts(locale: Locale) {
  return locale === "en" ? productsEn : products
}
export function getShowcaseProducts(locale: Locale) {
  return locale === "en" ? showcaseProductsEn : showcaseProducts
}
export function getSectors(locale: Locale) {
  return locale === "en" ? sectorsEn : sectors
}
export function getInsights(locale: Locale) {
  return locale === "en" ? insightsEn : insights
}
export function getSuccessStories(locale: Locale) {
  return locale === "en" ? successStoriesEn : successStories
}
