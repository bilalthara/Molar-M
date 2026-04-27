import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Link
            className="inline-flex cursor-pointer items-center rounded-md outline-offset-2 transition-opacity duration-150 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]"
            href="/"
            prefetch={false}
          >
            <Image
              alt="MolarMass logo"
              className="h-7 w-auto object-contain"
              height={28}
              src="/molar-mass-lab-logo-v2.webp"
              width={140}
            />
          </Link>
          <p className="mt-2 text-sm text-[#0a0f1a]/85">
            Trusted molar mass data and compound intelligence for students, labs, and professionals.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0a0f1a]">Legal</h4>
          <ul className="mt-2 space-y-2 text-sm text-[#0a0f1a]/85">
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/disclaimer">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0a0f1a]">Company</h4>
          <ul className="mt-2 space-y-2 text-sm text-[#0a0f1a]/85">
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/cookie-policy">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0a0f1a]">Guides</h4>
          <ul className="mt-2 space-y-2 text-sm text-[#0a0f1a]/85">
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/stoichiometry-guide">
                Stoichiometry Guide
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/mole-conversion-guide">
                Mole Conversion Guide
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:text-[#0F766E]" href="/lab-prep-guide">
                Lab Prep Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
