import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - touchy Documentation",
  description: "Privacy policy for the touchy documentation website and Google AdSense policies.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Overview</h2>
          <p>
            This Privacy Policy governs the manner in which the <strong>touchy</strong> documentation website collects, uses, maintains, and discloses information collected from visitors. We respect your privacy and are committed to protecting any information that may be gathered while accessing our documentation and open-source resources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. The touchy Daemon Itself</h2>
          <p>
            The <code className="font-mono text-amber-500">touchy</code> daemon runs 100% locally on your Linux machine. While it monitors keyboard press event lines through <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">libinput debug-events</code> to detect typing state, it does <strong>not</strong> record, store, log, or transmit any keystrokes or text over the internet. There is zero telemetry, tracking, or network communication in the touchy binary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Web Server Log Files</h2>
          <p>
            Like most standard website hosting providers (such as GitHub Pages), standard internet protocol (IP) addresses, browser type, referring pages, timestamps, and page interaction metrics may be collected by the host to maintain service reliability and security. This data contains no personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Cookies and Web Beacons</h2>
          <p>
            This website may use cookies or web beacons to store visitor preferences, record user-specific page accesses, and tailor web content according to browser types and display capabilities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">5. Google DoubleClick DART Cookies & Google AdSense</h2>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to visitors based upon their visit to this website and other sites across the internet:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on prior user visits.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on visits to this site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">6. CCPA & GDPR Compliance</h2>
          <p>
            We respect consumer rights under CCPA (California Consumer Privacy Act) and GDPR (General Data Protection Regulation). Users have the right to request information, access, rectify, or request erasure of personal data, and exercise opt-outs for any advertising-related processing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">7. Contact Information</h2>
          <p>
            For questions regarding this privacy policy or documentation, please submit an issue on the GitHub repository at{" "}
            <a
              href="https://github.com/Tekromancy/touchy/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline"
            >
              github.com/Tekromancy/touchy/issues
            </a>
            .
          </p>
        </section>
      </div>

      <AdBanner slot="5555555555" className="mt-12" />
    </article>
  );
}
