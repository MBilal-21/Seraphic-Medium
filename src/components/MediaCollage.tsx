import Image from "next/image";

export default function MediaCollage() {
  return (
    <section className="py-24 w-full overflow-hidden bg-white">
      <div className="relative w-full min-w-[320px] max-w-[420px] h-[145vw] max-h-[650px] mx-auto md:min-w-0 md:max-w-[1400px] md:max-h-none md:h-auto md:flex md:justify-center md:items-center md:-space-x-12 lg:-space-x-20 xl:-space-x-24 px-2 md:px-4">

        {/* Frame 1: Left Square/Book */}
        <div className="absolute top-[8%] left-[2%] w-[42%] z-10 md:relative md:w-[200px] md:top-auto md:left-auto lg:w-[260px] aspect-[4/5] rounded-[1rem] md:rounded-[1.5rem] border-[3px] border-black bg-white overflow-hidden shadow-xl md:translate-y-20 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
            alt="Books" fill className="object-cover opacity-80"
          />
        </div>

        {/* Frame 2: Center-Left Tall Video */}
        <div className="absolute top-0 right-[2%] w-[50%] z-20 md:relative md:w-[240px] md:top-auto md:right-auto lg:w-[320px] aspect-[9/16] rounded-[1rem] md:rounded-[1.5rem] border-[3px] border-black bg-gray-200 overflow-hidden shadow-2xl md:-translate-y-8 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&q=80&w=800"
            alt="Woman" fill className="object-cover"
          />
        </div>

        {/* Frame 3: Center Square (Hidden on Mobile) */}
        <div className="hidden md:block relative md:w-[280px] lg:w-[380px] aspect-square rounded-[1rem] md:rounded-[1.5rem] border-[3px] border-black bg-[#C4CACA] overflow-hidden shadow-2xl z-40 md:translate-y-10 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
            alt="Dog" fill className="object-cover"
          />

        </div>

        {/* Frame 4: Center-Right Tall Video */}
        <div className="absolute bottom-[2%] left-[2%] w-[52%] z-30 md:relative md:w-[240px] md:top-auto md:left-auto lg:w-[320px] aspect-[9/16] rounded-[1rem] md:rounded-[1.5rem] border-[3px] border-black bg-gray-200 overflow-hidden shadow-2xl md:-translate-y-12 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
            alt="Man" fill className="object-cover origin-bottom"
          />
        </div>

        {/* Frame 5: Right Square */}
        <div className="absolute bottom-[10%] right-[2%] w-[45%] z-40 md:relative md:w-[200px] md:top-auto md:right-auto lg:w-[260px] aspect-square rounded-[1rem] md:rounded-[1.5rem] border-[3px] border-black bg-[#A8B632] overflow-hidden shadow-xl md:translate-y-24 flex-shrink-0 flex flex-col p-2 md:p-6 justify-between">
          <div className="text-center pt-1 md:pt-0">
            <h4 className="text-white text-[7px] sm:text-[10px] md:text-sm lg:text-base font-extrabold leading-tight uppercase text-center drop-shadow-md">
              "WHY DID NO ONE TELL ME ABOUT NATURAL CAFFEINE?"
            </h4>
          </div>
          <div className="flex-1 relative flex items-center justify-center my-1 md:my-2">
            <Image
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600"
              alt="Product" width={100} height={100} className="object-contain w-8 h-8 md:w-24 md:h-24 mix-blend-multiply"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
