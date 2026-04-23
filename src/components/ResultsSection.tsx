export default function ResultsSection() {
  return (
    <section className="py-32 bg-white text-center px-6 md:px-12">
      <div className="max-w-5xl mx-auto border-y border-gray-100 py-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-16">
          Trackable Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center justify-center p-8">
            <h3 className="text-6xl md:text-7xl font-sans font-bold text-accent-blue mb-4 tracking-tighter">
              $100M+
            </h3>
            <p className="text-xl text-gray-500 font-medium">in total ad spend managed</p>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <h3 className="text-6xl md:text-7xl font-sans font-bold text-accent-blue mb-4 tracking-tighter">
              4.37x
            </h3>
            <p className="text-xl text-gray-500 font-medium">average Return on Ad Spend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
