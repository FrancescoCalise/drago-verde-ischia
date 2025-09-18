import Activities from "@/components/Activities";
import FeaturedEvent from "@/components/FeaturedEvent";
import HeroBanner from "@/components/HeroBanner";
import LastNews from "@/components/LastNews";
import { T } from "@/components/ui/T";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroBanner
          images={["/heroes/hero1.jpg", "/heroes/hero2.jpg"]}
          title={
            <T
              idml="hero.title"
              defaultText="Drago Verde Ischia"
            />
          }
          subtitle={
            <T
              idml="hero.subtitle"
              defaultText="La community di gioco di ruolo dal vivo e da tavolo di Ischia"
            />
          }
        />
        <Activities />
        <FeaturedEvent />
        <LastNews numberOfArticles={3} />
      </main>
    </div>
  );
}
