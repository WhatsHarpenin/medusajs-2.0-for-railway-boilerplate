import { sdk } from "@lib/config"
import { cache } from "react"
import { HttpTypes } from "@medusajs/types"

export const listPromotion = cache(async function (): Promise<
  HttpTypes.StorePromotion[] | null
> {
  try {
    const promotions = await sdk.store.promotion.list(
      {},
      { next: { tags: ["promotions"] } }
    )
    return promotions?.promotions || null
  } catch (error) {
    console.error("Error fetching promotions:", error)
    return null
  }
})
