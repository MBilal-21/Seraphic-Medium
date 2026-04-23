export default function TeamSection() {
  const team = [
    { name: "David Hunter", role: "Co-Founder", initials: "DH" },
    { name: "Chloe", role: "Creative Strategist", initials: "C" },
    { name: "Alex", role: "Performance Marketer", initials: "A" },
    { name: "Sarah", role: "Video Editor", initials: "S" },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] text-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-12">
          Backed by the Best
        </h2>

        {/* Partner Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 text-gray-400 font-semibold tracking-wide uppercase">
          <div className="flex items-center">Meta Business Partner</div>
          <div className="flex items-center">TikTok Marketing Partner</div>
          <div className="flex items-center">Shopify Partner</div>
        </div>

        {/* Team Cards */}
        <h3 className="text-2xl font-sans font-medium text-gray-800 mb-10">Meet the Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-blue/40 flex items-center justify-center text-accent-blue text-2xl font-bold mb-6">
                {member.initials}
              </div>
              <h4 className="text-xl font-semibold text-primary-dark">{member.name}</h4>
              <p className="text-gray-500 font-medium text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
