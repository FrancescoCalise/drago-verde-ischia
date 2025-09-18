 "use client"
import { T } from "@/components/ui/T"

export default function DraConLocationMapComponent() {
    return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          <T idml="contacts.map.title" defaultText="Dove trovarci" />
        </h2>
        
        <div className="w-full h-[250px] md:h-[400px] mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.156947901103!2d13.8666409!3d40.7365719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b4185fd29711b%3A0x5916ac1dd7a0dbec!2sCittadella%20della%20Carit%C3%A0%20%22Don%20Pasquale%20Sferratore%22!5e0!3m2!1sit!2sit!4v1758238066145!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </section>
    )
}