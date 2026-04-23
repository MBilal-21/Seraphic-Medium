import { ArrowRight, TrendingUp } from "lucide-react";

export default function PaidAdvertising() {
  return (
    <section className="py-32 bg-white text-primary-dark px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-sans font-semibold mb-10 tracking-tight">
            Paid Advertising
          </h2>

          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8 max-w-lg leading-relaxed">
            We understand <span className="font-semibold text-[#1877F2]">Facebook</span> & <span className="font-semibold text-[#FF0050]">TikTok Ads</span>.
          </p>

          <p className="text-xl text-gray-600 mb-12 max-w-md">
            With over $100M in total ad spend, very few agencies can match our expertise.
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium mb-4">We prioritise:</h3>
            <div className="flex items-center text-lg text-gray-800">
              <div className="bg-black text-white rounded-full p-1 mr-4">
                <ArrowRight size={20} />
              </div>
              New-Customer acquisition
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <div className="bg-black text-white rounded-full p-1 mr-4">
                <ArrowRight size={20} />
              </div>
              Sustainable, profitable scale
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <div className="bg-black text-white rounded-full p-1 mr-4">
                <ArrowRight size={20} />
              </div>
              Multi-channel attribution
            </div>
          </div>
        </div>

        {/* Right Content - Mockup Placeholder */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/10 to-transparent rounded-3xl blur-2xl"></div>
          <div className="relative bg-[#FAFAFA] border border-gray-200 shadow-2xl rounded-3xl p-8 transform rotate-float shadow-black/5 hover:scale-105 transition-transform duration-500">
            {/* Mockup Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-gray-400 font-medium bg-white px-3 py-1 rounded-full border border-gray-100">
                Ads Manager
              </div>
            </div>

            {/* Mockup Body */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Total ROAS</p>
                  <h3 className="text-3xl font-bold font-sans">4.37x</h3>
                </div>
                <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded shadow-sm text-sm font-semibold">
                  <TrendingUp size={16} className="mr-1" />
                  +24.2%
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="w-full h-40 bg-gradient-to-t from-accent-blue/5 to-transparent border-b-2 border-accent-blue/20 rounded-t-lg relative flex items-end">
                <svg className="w-full h-full opacity-60 drop-shadow-sm" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M0 40 L0 30 Q10 25, 20 35 T40 20 T60 10 T80 25 T100 5 L100 40 Z" fill="rgba(59, 130, 246, 0.1)" />
                  <path d="M0 30 Q10 25, 20 35 T40 20 T60 10 T80 25 T100 5" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
                  <p className="text-xs text-gray-400 mb-1">Total Ad Spend</p>
                  <p className="font-semibold text-lg">$2,281,672</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
                  <p className="text-xs text-gray-400 mb-1">Total Revenue</p>
                  <p className="font-semibold text-lg">$9,970,906</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
