import Hero from "@/components/Hero";
import MediaCollage from "@/components/MediaCollage";
import TrustBar from "@/components/TrustBar";
import PaidAdvertising from "@/components/PaidAdvertising";
import WinningCreatives from "@/components/WinningCreatives";
import TeamSection from "@/components/TeamSection";
import ResultsSection from "@/components/ResultsSection";
import TidyCalEmbed from "@/components/TidyCalEmbed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <MediaCollage />
      <TrustBar />
      <PaidAdvertising />
      <WinningCreatives />
      <TeamSection />
      <ResultsSection />
      <TidyCalEmbed path="ahmadrashid/brand-strategy-consultation" />
    </main>
  );
}
