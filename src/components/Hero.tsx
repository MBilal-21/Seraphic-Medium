import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight max-w-5xl tracking-tight text-primary-dark">
        We scale 7- & 8-figure DTC brands with converting ad creatives.
      </h1>

      <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl">
        A proven 3-step strategy to turn views into revenue, lower your CPA, and scale your brand to the next level.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="https://tidycal.com/ahmadrashid/30-minute-meeting"
          className="bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/90 transition-all hover:scale-105 flex items-center justify-center"
        >
          Book a Call with us Today <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-sm md:text-base text-gray-600 font-medium">
        <div className="flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-accent-blue mr-2" />
          Data-Driven Strategy
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-accent-blue mr-2" />
          UGC & Premium Production
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-accent-blue mr-2" />
          Continuous Iteration
        </div>
      </div>
    </section>
  );
}
