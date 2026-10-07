import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function AcceleratorPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black font-sans selection:bg-orange-200">

      {/* Hero Section */}
      <section className="bg-zinc-100 py-24 px-6 md:px-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-zinc-200/50 py-20 px-8 md:px-16 flex flex-col items-center text-center">
          
          <Image 
            src="/logo-txt-black.png" 
            alt="Seraphic Medium Logo" 
            width={240} 
            height={80} 
            className="h-16 md:h-20 w-auto object-contain mb-8"
            priority
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-none tracking-tighter text-zinc-950 max-w-4xl font-sans">
            We scale 7- & 8-figure DTC brands with converting ad creatives.
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl font-normal text-zinc-600 leading-relaxed">
            A proven 3-step strategy to turn views into revenue, lower your CPA, and scale your brand to the next level. No generic fluff.
          </p>

          <div className="w-full max-w-3xl mx-auto mb-10">
            <img 
              src="/assets/heroimage.jpeg" 
              alt="Seraphic Medium Growth Strategy" 
              className="w-full border border-zinc-200 shadow-xl rounded-2xl object-cover" 
            />
          </div>

          <div className="flex flex-col items-center w-full sm:w-auto">
            <Link 
              href="https://tidycal.com/ahmadrashid/30-minute-meeting"
              className="bg-orange-500 text-white px-10 py-5 text-xl md:text-2xl font-bold rounded-full shadow-md hover:shadow-lg hover:bg-orange-600 active:-translate-y-[1px] active:scale-[0.98] transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Book My Free Growth Call
            </Link>
            <span className="text-sm font-medium mt-4 text-zinc-500 tracking-wide">Only takes 30 seconds*</span>
          </div>

          <div className="mt-12 space-y-3 text-base md:text-lg text-left text-zinc-800 font-medium inline-block mx-auto">
            <div className="flex items-center">
              <span className="mr-3 text-xl">✅</span> Data-Driven Strategy & Multi-channel attribution
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">✅</span> Premium UGC & High-Converting Production
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">✅</span> Continuous Iteration for Sustainable, profitable scale
            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars Section (The Problem, The Solution, Why It Works) */}
      <section className="bg-zinc-50 py-24 px-6 md:px-12 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[40px] font-bold text-zinc-950 mb-6 font-sans tracking-tight">
            A Proven Approach to Scaling Your Brand
          </h2>
          <p className="text-[16px] md:text-[18px] text-zinc-600 font-medium leading-relaxed max-w-[750px] mx-auto">
            We combine performance-driven advertising, creative testing, and proven strategies to help eCommerce brands turn more ad spend into predictable growth.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          <div className="bg-white p-10 lg:p-12 border border-zinc-200 rounded-[2.5rem] flex flex-col items-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <h3 className="text-zinc-950 text-2xl font-bold mb-4">The Problem</h3>
            <p className="text-zinc-600 font-medium leading-relaxed">
              Struggling with rising CPAs? Ads not converting like they used to? Generic creatives that just bounce?
            </p>
          </div>

          <div className="bg-white p-10 lg:p-12 border border-zinc-200 rounded-[2.5rem] flex flex-col items-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <h3 className="text-zinc-950 text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-zinc-600 font-medium leading-relaxed">
              Our proven strategy leverages Facebook & TikTok Ads with data-driven creative testing to scale brands fast.
            </p>
          </div>

          <div className="bg-white p-10 lg:p-12 border border-zinc-200 rounded-[2.5rem] flex flex-col items-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <h3 className="text-zinc-950 text-2xl font-bold mb-4">Why It Works</h3>
            <p className="text-zinc-600 font-medium leading-relaxed mb-4">
              <span className="block font-bold text-3xl text-zinc-950 mb-1 mt-2 tracking-tighter">$100M+</span> in ad spend managed.<br/>
              <span className="block font-bold text-3xl text-zinc-950 mt-4 mb-1 tracking-tighter">4.37x</span> average ROAS.
            </p>
          </div>

        </div>
      </section>
      {/* 5 Areas Section */}
      <section className="bg-white py-24 px-6 md:px-12 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Side: Rocket Image */}
          <div className="w-full flex justify-center md:justify-end">
            <img 
              src="/assets/rocket-power.jpeg" 
              alt="Rocket representing growth and scaling" 
              className="w-full max-w-lg object-contain rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-zinc-200/50"
            />
          </div>
          
          {/* Right Side: Text & CTA */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none font-bold text-zinc-950 mb-8 font-sans">
              Build the Engine Behind Consistent E-commerce Growth
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-[55ch] mb-12">
              Your store needs more than traffic to scale. You need the right systems working together—from acquisition and AI content to branding, conversion, customer experience, and retention. When these six areas are aligned, your brand has the foundation to grow faster and profitably.
            </p>
            <Link 
              href="https://tidycal.com/ahmadrashid/30-minute-meeting"
              className="inline-flex items-center justify-center bg-zinc-950 text-white px-10 py-5 text-lg font-medium transition-all duration-300 hover:bg-zinc-800 active:-translate-y-[1px] active:scale-[0.98] shadow-md hover:shadow-lg rounded-sm"
            >
              Book Your Strategy Call
            </Link>
          </div>

        </div>
      </section>

{/* Testimonials Carousel Section */}
      <TestimonialCarousel />

    </main>
  );
}

