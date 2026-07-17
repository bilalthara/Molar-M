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
      className={cn("inline-flex h-9 w-[170px] shrink-0 items-center no-underline sm:w-[190px]", className)}
      aria-label={`${SITE_NAME} home`}
    >
      <span className="relative block h-9 w-full">
        <Image
          src="/logo-light-v2.png"
          alt={`${SITE_NAME} logo`}
          fill
          sizes="190px"
          priority={priority}
          className="logo-img-light object-contain object-left"
          title={`${SITE_NAME} — chemistry learning platform`}
        />
        <Image
          src="/logo-dark-v2.png"
          alt=""
          fill
          sizes="190px"
          priority={priority}
          className="logo-img-dark object-contain object-left"
          title={`${SITE_NAME} logo`}
          aria-hidden
        />
      </span>
    </Link>
  );
}
