import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SponsoredBanner from "@modules/home/components/sponsored-banner"
import MagazineIssues from "@modules/home/components/magazine-issues"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { listMagazineIssues } from "@lib/data/magazines"

export const metadata: Metadata = {
  title: "Sting STORE YOUR ONE STOP SHOP FOR EVERYTHING CULTURE IN AFRICA AND THE DIASPORA ",
  description:
    "A STORE FOR EVERYTHING CULTURE IN AFRICA AND THE DIASPORA. FOUR US bUY us",
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)
  const magazines = await listMagazineIssues()

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <MagazineIssues magazines={magazines} />
      <SponsoredBanner collections={collections} region={region} />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
