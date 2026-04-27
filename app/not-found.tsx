import Link from "next/link";

import { FormulaSub } from "@/components/ui/formula-sub";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center text-[#0a0f1a]">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-base leading-relaxed text-[#0a0f1a]/85">
        We could not find this URL. If you entered a chemical formula, check that it uses valid element symbols and
        numbers (for example <FormulaSub formula="H2O" /> or <FormulaSub formula="Ca(OH)2" />).
      </p>
      <Link className="mt-6 rounded-xl bg-slate-900 px-4 py-2 text-sm text-white" href="/">
        Back to home
      </Link>
    </main>
  );
}
