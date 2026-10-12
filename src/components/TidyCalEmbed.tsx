"use client";

import { useEffect, useRef } from "react";
import { Calendar, ShieldCheck, Clock, ExternalLink } from "lucide-react";

interface TidyCalEmbedProps {
  path?: string;
}

export default function TidyCalEmbed({
  path = "ahmadrashid/brand-strategy-consultation"
}: TidyCalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "tidycal-embed-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initEmbed = () => {
      // @ts-expect-error - TidyCal is attached to window by embed.js
      if (window.TidyCal && containerRef.current) {
        const el = containerRef.current.querySelector("#tidycal-embed");
        if (el) {
          // @ts-expect-error - TidyCal init
          window.TidyCal.init(el);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      script.onload = () => {
        initEmbed();
      };
      document.body.appendChild(script);
    } else {
      initEmbed();
    }
  }, [path]);

  return (
    <section id="booking" className="py-20 md:py-28 px-4 md:px-8 bg-zinc-900 border-t border-zinc-800 text-white scroll-mt-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Calendar size={14} />
            <span>Direct Scheduling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mb-4">
            Schedule Your Free Brand Strategy Consultation
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select a date and time that works best for you. We will audit your current creatives and Meta ad strategy, then map out a clear path to scale.
          </p>
        </div>

        {/* Calendar Card Container */}
        <div
          ref={containerRef}
          className="bg-white rounded-3xl p-2 sm:p-4 shadow-2xl border border-zinc-200/50 overflow-hidden relative"
        >
          <div
            id="tidycal-embed"
            data-path={path}
            className="tidycal-embed w-full min-h-[700px] flex items-center justify-center"
          >
            <iframe
              src={`https://tidycal.com/${path}?embed=1`}
              title="Schedule Brand Strategy Consultation"
              className="w-full h-[760px] border-0 rounded-2xl"
              allow="payment"
            />
          </div>
        </div>

        {/* Trust Points beneath Calendar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>100% Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-400" />
            <span>30 Minutes Duration</span>
          </div>
          <a
            href={`https://tidycal.com/${path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
          >
            <span>Open in new tab</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

