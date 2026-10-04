import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "About touchy - Precision Touchpad Daemon for Hyprland",
  description: "Learn about the motivation, architecture, and background of touchy on Hyprland (Wayland).",
};

export default function AboutPage() {
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
          About touchy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          The background, design philosophy, and technical implementation behind touchy.
        </p>
      </div>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">The Problem</h2>
          <p>
            Laptop touchpads on modern Linux setups often suffer from erratic palm-detection behavior. While typing on modern Wayland compositors like <strong>Hyprland</strong>, palms casually graze the touchpad surface, triggering accidental cursor jumps, unintended focus stealing, or stray clicks in text editors and terminals.
          </p>
          <p className="mt-2">
            Built-in compositor palm detection can be finicky or laggy, and standard generic tools don&apos;t always integrate cleanly with Hyprland&apos;s dynamic device IPC.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">The Solution</h2>
          <p>
            Created by Joshua Edward McLaughlin Cox (<a href="https://github.com/Tekromancy" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Tekromancy</a>), <code className="font-mono text-amber-500 font-semibold">touchy</code> provides an ultra-lightweight, reactive daemon that listens directly to hardware input events.
          </p>
          <p className="mt-2">
            By piping <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">libinput debug-events</code> looking specifically for <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">KEYBOARD_.*pressed</code> signals, <code className="font-mono">touchy</code> immediately invokes Hyprland&apos;s IPC command <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">hyprctl keyword device[&lt;device&gt;]:enabled false</code> to lock the touchpad instantly.
          </p>
          <p className="mt-2">
            As soon as keypress activity stops, a lightweight configurable debounce timer (defaults to 1 second) cleanly re-enables the touchpad, ensuring seamless typing without frustration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Direct Hardware Event Stream</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Uses libinput&apos;s raw stream so key detection happens instantaneously before the window manager or compositor layers add latency.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Gamer Friendly</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Supports semaphore flags (<code className="font-mono">/tmp/.game_mode_on</code>) so gaming sessions with simultaneous WASD keys and touchpad aiming aren&apos;t interrupted.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Config Cascading</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Reads settings from <code className="font-mono">~/.touchyrc</code> or <code className="font-mono">~/.config/touchy/touchyrc</code>, plus environment variable overrides.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Singleton Protection</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Includes automated lockfile checks preventing multiple instances from fighting over hyprctl state changes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Source Code & Community</h2>
          <p>
            touchy is free and open-source software licensed under GPL-3.0. Pull requests and feature requests are welcome to expand compositor support to Sway, River, or Niri.
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/Tekromancy/touchy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>github.com/Tekromancy/touchy</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </section>
      </div>

      <AdBanner slot="7777777777" className="mt-12" />
    </article>
  );
}
