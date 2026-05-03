import { Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-ui-fg-base text-white">
      <div className="absolute inset-0 bg-ui-fg-base/95" />
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="content-container py-3 text-center text-xs uppercase tracking-[0.3em] text-white/80">
          Free shipping to Nigeria on all orders above ₦1,612,905
        </div>
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center small:px-12">
        <Text className="uppercase tracking-[0.35em] text-sm text-white/70">
          Magazine · Store
        </Text>
        <Heading
          level="h1"
          className="mt-8 text-[5rem] leading-[0.95] font-black uppercase tracking-[-0.06em] text-white small:text-[8rem]"
        >
          STINGINC
        </Heading>
        <Text className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Discover the latest editorial drops and premium product stories in a bold,
          minimalist editorial experience.
        </Text>
        <a
          href="/collections"
          className="mt-10 inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
        >
          Shop now
        </a>
      </div>
    </section>
  )
}

export default Hero
