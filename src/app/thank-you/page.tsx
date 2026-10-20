import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Confirmed | Seraphic Medium",
  description: "Your Brand Strategy Consultation has been scheduled.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between selection:bg-orange-500/30">
      {/* Meta Pixel Conversion Tracking for Schedule & Lead */}
      <Script id="meta-pixel-conversion" strategy="afterInteractive">
        {`
          if (typeof window.fbq === 'function') {
            window.fbq('track', 'Schedule');
            window.fbq('track', 'Lead');
          }
        `}
      </Script>

      {/* Top Header */}
      <header className="w-full border-b border-zinc-800/80 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Seraphic Medium"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <CheckCircle2 size={44} strokeWidth={2.2} />
        </div>

        {/* Headline */}
        <span className="text-orange-400 text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
          Booking Confirmed
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-sans">
          You&apos;re All Set!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          Thank you for booking your <strong className="text-zinc-200">Brand Strategy Consultation</strong>. A calendar invite and Google Meet link have been sent directly to your email inbox.
        </p>

        {/* Next Steps Box */}
        <div className="w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-10 text-left mb-12 shadow-2xl backdrop-blur-sm">
          <h2 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
            <Calendar className="text-orange-400" size={22} />
            What happens next?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-zinc-800 text-zinc-200 flex items-center justify-center font-bold text-sm flex-shrink-0 border border-white/5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">Check Your Inbox</h3>
                <p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">
                  Look for a confirmation email from TidyCal with your meeting date, time, and Google Meet video link.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-zinc-800 text-zinc-200 flex items-center justify-center font-bold text-sm flex-shrink-0 border border-white/5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">Accept the Calendar Invite</h3>
                <p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">
                  Click &ldquo;Yes&rdquo; on the calendar invite so it gets reserved on your personal Google or Apple calendar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-zinc-800 text-zinc-200 flex items-center justify-center font-bold text-sm flex-shrink-0 border border-white/5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">Quick Preparation</h3>
                <p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">
                  Have your clothing brand&apos;s website URL and your recent advertising metrics ready so we can dive straight into high-leverage growth strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/accelerator"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all active:scale-98 flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Explore The Accelerator</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium px-8 py-4 rounded-full transition-all border border-zinc-700 text-center"
          >
            Back to Homepage
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Seraphic Medium. All rights reserved.
      </footer>
    </main>
  );
}

