import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Terms of Service - touchy Documentation",
  description: "Terms and conditions of use for the touchy open source documentation website.",
};

export default function TermsOfService() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 mb-4"
        >
          ← Back to Documentation
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and utilizing this website or running the <code className="font-mono text-amber-500">touchy</code> software daemon, you agree to comply with and be bound by these Terms of Service, applicable laws, and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. Open Source License</h2>
          <p>
            The touchy software daemon is free and open-source software licensed under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>. You are permitted to inspect, modify, adapt, and redistribute the software in compliance with the GPL-3.0 license terms. All documentation is offered for educational and instructional purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Disclaimer of Warranty & Limitation of Liability</h2>
          <p>
            The software and documentation are provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Because touchy interacts with device input event streams and window manager IPC, you acknowledge that you use the tool at your own discretion. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Third-Party Advertisements</h2>
          <p>
            This website displays third-party advertisements served through Google AdSense. We do not endorse or assume responsibility for any products, services, or claims made in third-party advertisements or external linked sites.
          </p>
        </section>
      </div>

      <AdBanner slot="6666666666" className="mt-12" />
    </article>
  );
}
