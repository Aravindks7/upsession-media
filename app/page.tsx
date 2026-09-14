import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import { EventGrid } from "@/components/sections/event-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventGrid />
    </main>
  );
}
