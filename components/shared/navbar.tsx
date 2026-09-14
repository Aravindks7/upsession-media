import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Upsession Media Logo" 
            width={180} 
            height={40} 
            className="h-8 w-auto"
            priority
          />
          <h1 className="uppercase font-bold text-2xl">Upsession<span className="text-[#C5A265]">.</span></h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          <Link href="#events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link href="#artists" className="hover:text-white transition-colors">
            Artists
          </Link>
          <Link href="#gallery" className="hover:text-white transition-colors">
            Gallery
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="bg-[#C5A265] text-black hover:bg-[#C5A265]/90 border-0 text-xs sm:text-sm font-bold tracking-wider uppercase px-8 rounded-full transition-all"
          >
            Book an Event
          </Button>
        </div>
      </div>
    </header>
  );
}
