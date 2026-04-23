import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-gray py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <h2 className="font-serif text-4xl font-bold mb-10">LJV Media</h2>

        {/* Final CTA */}
        <Link
          href="#contact"
          className="bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/80 transition-transform hover:scale-105"
        >
          Speak To Our Team Today
        </Link>

        {/* Links */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-500">
          <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-black transition-colors">Disclaimer</Link>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} LJV Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
