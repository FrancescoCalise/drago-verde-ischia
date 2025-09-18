"use client"

import { T } from "@/components/ui/T"
import HeroBanner from "@/components/HeroBanner"
import DraconCountdownHighlightsComponent from "@/components/dracon-ischia/CountdownHighlights"
import DraConStorytellingComponent from "@/components/dracon-ischia/Storytelling"
import DraConInfoSectionComponent from "@/components/dracon-ischia/InfoSection"
import DraConProgramPreviewComponent from "@/components/dracon-ischia/ProgramPreview"
import DraConLocationMapComponent from "@/components/dracon-ischia/LocationMaps"

export default function DraconIschiaPage() {


  return (
    <main className="flex flex-col bg-gradient-to-b from-white via-green-50 to-green-100">
      {/* Hero */}
      <HeroBanner
        images={["/dracon-ischia-cover.jpg"]}
        title={<T idml="dracon.title" defaultText="DraCon Ischia" />}
        subtitle={
          <>
            <T
              idml="dracon.subtitle"
              defaultText="La convention ludica a ingresso gratuito"
            />
            <span  className="mt-2 text-lg">
              📅 11 e 12 Ottobre · 📍 Cittadella della Carità, Forio
            </span >
          </>
        }
      />

      <DraconCountdownHighlightsComponent />
      <DraConStorytellingComponent />
      <DraConInfoSectionComponent />
      <DraConProgramPreviewComponent />
      <DraConLocationMapComponent />  
    </main>
  )
}