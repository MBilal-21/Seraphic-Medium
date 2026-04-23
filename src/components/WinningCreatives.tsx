import { Video, BarChart2, Repeat } from "lucide-react";

export default function WinningCreatives() {
  return (
    <section className="py-24 bg-primary-dark text-white text-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Winning Ad Creatives
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20 font-light">
          We handle the entire creative process from concept to delivery, ensuring your ads stop the scroll and convert.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-left hover:bg-white/10 transition-colors">
            <div className="bg-accent-blue/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-accent-blue">
              <BarChart2 size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wider text-accent-blue mb-2 uppercase">Step 1</p>
            <h3 className="text-2xl font-semibold mb-4 text-white">Research & Strategy</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              We mine your customer reviews and competitor ads to uncover the exact angles that will resonate with your audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-left hover:bg-white/10 transition-colors">
            <div className="bg-accent-blue/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-accent-blue">
              <Video size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wider text-accent-blue mb-2 uppercase">Step 2</p>
            <h3 className="text-2xl font-semibold mb-4 text-white">Production & Sorting</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              We source high-quality creators and manage the entire production process to deliver premium ad assets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-left hover:bg-white/10 transition-colors">
            <div className="bg-accent-blue/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-accent-blue">
              <Repeat size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wider text-accent-blue mb-2 uppercase">Step 3</p>
            <h3 className="text-2xl font-semibold mb-4 text-white">Testing & Iteration</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              We continually launch, analyze, and iterate on creatives to find the ultimate winning formula for your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
