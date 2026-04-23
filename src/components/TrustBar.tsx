export default function TrustBar() {
  const brands = ["NutriCanine", "Thought Catalog", "Hush.", "magic", "biktrix", "SABERSPRO", "MAUVAIS", "HOLO"];

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-semibold mb-16 text-primary-dark">
          50+ fast-growing DTC brands trust us
        </h2>

        {/* Scrolling or Static Grid of Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 opacity-70 grayscale">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-2xl font-bold font-sans tracking-widest text-[#181818]">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
