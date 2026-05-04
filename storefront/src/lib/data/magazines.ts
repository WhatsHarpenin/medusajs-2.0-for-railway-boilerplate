import { sdk } from "@lib/config"
import { cache } from "react"
import { HttpTypes } from "@medusajs/types"

export const listMagazineIssues = cache(async function (): Promise<
  HttpTypes.StoreCollection[] | null
> {
  try {
    const { collections } = await sdk.store.collection.list(
      { limit: 50 },
      { next: { tags: ["magazines"] } }
    )
    return collections || null
  } catch (error) {
    console.error("Error fetching magazine issues:", error)
    return null
  }
})
