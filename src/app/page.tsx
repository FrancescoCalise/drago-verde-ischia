import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import Activities from "@/components/Activities"
import FeaturedEvent from "@/components/FeaturedEvent"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Activities />
        <FeaturedEvent />
      </main>
    </div>
  )
}
