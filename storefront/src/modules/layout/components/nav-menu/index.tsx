"use client"

import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const NavMenu = () => {
  const pathname = usePathname()
  const isStoreActive = pathname?.startsWith("/store")
  const isMagazineActive = pathname?.startsWith("/magazine")

  return (
    <nav className="hidden small:flex items-center gap-x-8 h-full">
      <LocalizedClientLink
        href="/magazine"
        className={`transition-colors duration-150 ${
          isMagazineActive ? "text-red-600" : "text-ui-fg-subtle hover:text-ui-fg-base"
        }`}
      >
        Magazine
      </LocalizedClientLink>

      <div className="relative group">
        <LocalizedClientLink
          href="/store"
          className={`transition-colors duration-150 ${
            isStoreActive ? "text-red-600" : "text-ui-fg-subtle hover:text-ui-fg-base"
          }`}
          data-testid="nav-store-link"
        >
          Store
        </LocalizedClientLink>

        <div className="invisible opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 absolute left-0 top-full z-50 mt-2 w-56 rounded-3xl border border-ui-border-base bg-white p-4 text-sm text-ui-fg-base shadow-xl">
          <ul className="space-y-3">
            <li>
              <LocalizedClientLink
                href="/store/all"
                className="block hover:text-ui-fg-base"
              >
                All
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/store/blackhaine"
                className="block hover:text-ui-fg-base"
              >
                Blackhaine
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/store/lookbooks"
                className="block hover:text-ui-fg-base"
              >
                Lookbooks
              </LocalizedClientLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
