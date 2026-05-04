export default function MagazineIssueSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="aspect-square bg-red-600 animate-pulse" />
      <div className="p-4 bg-ui-bg-base">
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
      </div>
    </div>
  )
}
