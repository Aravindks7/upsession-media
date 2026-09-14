import { Button } from "@/components/ui/button";
import { MapPin, Ticket, Share2 } from "lucide-react";
import Image from "next/image";

// Placeholder data matching the new design
const events = [
  {
    id: 1,
    title: "Groove Fest",
    date: "NOVEMBER 14, 2026 - 7:00 PM - 1:00 AM",
    location: "Marine Drive Amphitheatre, Kochi, Kerala",
    description: "Our flagship annual festival returns with three stages of indie, electronic and fusion acts across one riverside night.",
    lineup: "The Midnight Static, Rhea & The Low End, DJ Kaveri",
    price: "₹899 onwards",
    image: "https://images.unsplash.com/photo-1540039155732-d68f7715f4ff?auto=format&fit=crop&q=80&w=800",
    countdown: { days: "61", hrs: "01", min: "23", sec: "51" }
  },
  {
    id: 2,
    title: "Unplugged Sessions Vol. 9",
    date: "SEPTEMBER 5, 2026 - 7:30 PM - 10:30 PM",
    location: "The Attic Rooftop, Kochi, Kerala",
    description: "An intimate acoustic evening featuring rising singer-songwriters from our roster.",
    lineup: "Anagha Suresh, Kabir & Strings",
    price: "₹499 onwards",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    countdown: { days: "24", hrs: "14", min: "09", sec: "12" }
  },
];

export function EventGrid() {
  return (
    <section id="events" className="py-24 bg-[#0a0a0a] relative z-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <span className="text-[#C5A265] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
            Featured Events
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            Nights worth clearing your<br />calendar for.
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-black/40 flex flex-col md:flex-row transition-all hover:border-white/10"
            >
              {/* Image Container */}
              <div className="relative w-full md:w-[35%] h-72 md:h-auto min-h-[300px] shrink-0">
                <div className="absolute top-4 left-4 z-10 border border-[#C5A265] text-[#C5A265] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm bg-black/60">
                  Upcoming
                </div>
                {/* Fallback color */}
                <div className="absolute inset-0 bg-neutral-900" />
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover grayscale opacity-70 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-10 md:w-[65%] flex flex-col justify-between">
                <div>
                  <p className="text-[#C5A265] text-xs font-bold tracking-widest uppercase mb-4">
                    {event.date}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                    <MapPin className="w-4 h-4 text-[#C5A265]" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    <span className="text-white font-bold">Lineup:</span> {event.lineup}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                    <div>
                      <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase block mb-2">
                        Tickets
                      </span>
                      <span className="text-[#C5A265] font-serif text-xl md:text-2xl">
                        {event.price}
                      </span>
                    </div>
                    
                    <div className="flex gap-5 text-center">
                      <div className="flex flex-col">
                        <span className="text-[#C5A265] font-serif text-2xl leading-none">{event.countdown.days}</span>
                        <span className="text-[9px] text-gray-500 tracking-widest mt-2">DAYS</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#C5A265] font-serif text-2xl leading-none">{event.countdown.hrs}</span>
                        <span className="text-[9px] text-gray-500 tracking-widest mt-2">HRS</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#C5A265] font-serif text-2xl leading-none">{event.countdown.min}</span>
                        <span className="text-[9px] text-gray-500 tracking-widest mt-2">MIN</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#C5A265] font-serif text-2xl leading-none">{event.countdown.sec}</span>
                        <span className="text-[9px] text-gray-500 tracking-widest mt-2">SEC</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-[#C5A265] text-black hover:bg-[#C5A265]/90 border-0 text-[10px] sm:text-xs font-bold tracking-wider uppercase h-10 px-6 rounded-full flex items-center gap-2">
                      <Ticket className="w-3.5 h-3.5" /> Book Tickets
                    </Button>
                    <Button variant="outline" className="border-white/10 bg-transparent text-gray-300 hover:bg-white/5 hover:text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase h-10 px-6 rounded-full flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" /> Map
                    </Button>
                    <Button variant="outline" className="border-white/10 bg-transparent text-gray-300 hover:bg-white/5 hover:text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase h-10 px-6 rounded-full flex items-center gap-2">
                      <Share2 className="w-3.5 h-3.5" /> Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
