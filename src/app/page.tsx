import { Navigation } from "@/components/Navigation";
import { AnimatedDesktop } from "@/components/AnimatedDesktop";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <AnimatedDesktop />
      </main>
    </>
  );
}
