import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"

import ProductPreview from "@modules/products/components/product-preview"

export default function SponsoredBanner({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  const sponsoredProducts = collections
    .flatMap((collection) => collection.products ?? [])
    .slice(0, 3)

  if (!sponsoredProducts.length) {
    return null
  }

  return (
    <section className="content-container py-16 bg-ui-bg-subtle">
      <div className="flex flex-col gap-4 small:flex-row small:items-end small:justify-between mb-10">
        <div>
          <Text className="uppercase tracking-[0.35em] text-ui-fg-subtle font-semibold text-sm">
            Sponsored
          </Text>
          <Heading
            level="h2"
            className="mt-3 text-5xl small:text-6xl font-bold text-ui-fg-base leading-tight"
          >
            Featured Products
          </Heading>
        </div>
        <Text className="max-w-2xl text-ui-fg-subtle">
          Hand-picked featured items from our favorite collaborators, selected to
          match the latest drops.
        </Text>
      </div>
      <ul className="grid grid-cols-1 gap-6 small:grid-cols-3">
        {sponsoredProducts.map((product) => (
          <li key={product.id} className="overflow-hidden rounded-3xl border border-ui-border-base bg-white">
            {/* @ts-ignore */}
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </section>
  )
}
