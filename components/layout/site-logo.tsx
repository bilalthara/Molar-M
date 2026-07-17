import Image from "next/image";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

/** Theme-aware logo at standard header size (~36px tall). */
export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex h-8 w-[132px] shrink-0 items-center no-underline min-[380px]:h-9 min-[380px]:w-[160px] sm:w-[190px]",
        className,
      )}
      aria-label={`${SITE_NAME} home`}
    >
      <span className="relative block h-full w-full min-w-0">
        <Image
          src="/logo-light-v2.png"
          alt={`${SITE_NAME} logo`}
          fill
          sizes="(max-width: 380px) 132px, (max-width: 640px) 160px, 190px"
          priority={priority}
          className="logo-img-light object-contain object-left"
          title={`${SITE_NAME} — chemistry learning platform`}
        />
        <Image
          src="/logo-dark-v2.png"
          alt=""
          fill
          sizes="(max-width: 380px) 132px, (max-width: 640px) 160px, 190px"
          priority={priority}
          className="logo-img-dark object-contain object-left"
          title={`${SITE_NAME} logo`}
          aria-hidden
        />
      </span>
    </Link>
  );
}
