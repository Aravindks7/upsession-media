import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Media Placeholder */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Fallback image if we don't have video, similar to the Groove Fest vibe */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540039155732-d68f7715f4ff?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-start pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#C5A265] uppercase mb-8">
            UPSESSION MEDIA
          </span>
        </div>
        
        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both text-6xl md:text-8xl lg:text-[110px] font-serif leading-[1.1] tracking-tight mb-8">
          <span className="block text-white">Crafted</span>
          <span className="block text-[#C5A265] italic">Experiences.</span>
          <span className="block text-white">Amplified.</span>
        </h1>
        
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both text-base md:text-lg text-gray-300 max-w-125 mb-12 font-medium leading-relaxed">
          We produce concerts, manage artists, and build media that carries a room from silence to euphoria — then makes sure the world sees it after.
        </p>
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both flex flex-wrap gap-4">
          <Button size="lg" className="bg-[#C5A265] text-black hover:bg-[#C5A265]/90 border-0 text-xs sm:text-sm font-bold tracking-wider uppercase h-12 px-8 rounded-full transition-all">
            Explore Our Work
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-xs sm:text-sm font-bold tracking-wider uppercase h-12 px-8 rounded-full transition-all">
            Book An Event
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-xs sm:text-sm font-bold tracking-wider uppercase h-12 px-8 rounded-full transition-all">
            Watch Showreel
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Optional, keeping it subtle if needed or remove. Let's keep it. */}
      <div className="absolute bottom-10 left-8 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1.5">
          <div className="w-1 h-2 bg-[#C5A265]/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
