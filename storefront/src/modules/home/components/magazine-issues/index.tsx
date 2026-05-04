import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MagazineIssueSkeleton from "./skeleton"

export default function MagazineIssues({
  magazines,
}: {
  magazines: HttpTypes.StoreCollection[] | null
}) {
  const hasIssues = magazines && magazines.length > 0
  const displayCount = 5

  return (
    <section className="content-container py-16 bg-white">
      <div className="mb-10">
        <Text className="uppercase tracking-[0.35em] text-ui-fg-subtle font-semibold text-sm">
          Editorial
        </Text>
        <Heading
          level="h2"
          className="mt-3 text-5xl small:text-6xl font-bold text-ui-fg-base leading-tight"
        >
          Magazine Issues
        </Heading>
      </div>

      <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 lg:grid-cols-5 gap-4">
        {hasIssues
          ? magazines.slice(0, displayCount).map((issue) => (
              <LocalizedClientLink
                key={issue.id}
                href={`/collections/${issue.handle}`}
                className="overflow-hidden rounded-lg group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
                  {issue.metadata?.image_url ? (
                    <img
                      src={issue.metadata.image_url as string}
                      alt={issue.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-red-600" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="p-3 bg-ui-bg-base">
                  <p className="text-sm font-semibold text-ui-fg-base truncate group-hover:text-red-600 transition-colors">
                    {issue.title}
                  </p>
                  {issue.description && (
                    <p className="text-xs text-ui-fg-subtle truncate">
                      {issue.description}
                    </p>
                  )}
                </div>
              </LocalizedClientLink>
            ))
          : Array.from({ length: displayCount }).map((_, i) => (
              <MagazineIssueSkeleton key={`skeleton-${i}`} />
            ))}
      </div>
    </section>
  )
}
