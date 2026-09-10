/**
 * Typed, transport-agnostic analytics helper.
 *
 * By default this is a no-op adapter that only logs in development. Wire a real
 * analytics provider (e.g. Vercel Analytics custom events, GA4, Segment) inside
 * `dispatch` when the destination is confirmed.
 */

export type AnalyticsEvent =
  | 'hero_primary_cta'
  | 'hero_secondary_cta'
  | 'solution_card_open'
  | 'product_tab_change'
  | 'sector_select'
  | 'technical_pdf_request'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_success'

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>

function dispatch(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  // No-op adapter. Replace with a real provider when confirmed.
  if (process.env.NODE_ENV !== 'production') {
    console.log('[v0] analytics:', event, payload ?? {})
  }
  // Example future integration:
  // window.va?.('event', { name: event, ...payload })
}

export function track(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  try {
    dispatch(event, payload)
  } catch {
    // Analytics must never break the UI.
  }
}
