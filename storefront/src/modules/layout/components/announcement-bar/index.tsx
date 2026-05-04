import { listPromotion } from "@lib/data/promotions"
import AnnouncementBarClient from "./client"

const DEFAULT_MESSAGE = "Stinginc jersey day pop up store is coming to a city near you"

export default async function AnnouncementBar() {
  const promotions = await listPromotion()

  let message = DEFAULT_MESSAGE

  if (promotions && promotions.length > 0) {
    const promotionMessage = promotions
      .map((promo) => promo.description || promo.code)
      .filter(Boolean)
      .join(" | ")

    if (promotionMessage) {
      message = promotionMessage
    }
  }

  return <AnnouncementBarClient message={message} />
}
