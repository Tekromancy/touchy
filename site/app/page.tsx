"use client";

import { useState } from "react";
import AdBanner from "./components/AdBanner";

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 mb-6">
          <span>✨ Wayland + Hyprland Touchpad Protection</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Stop accidental palm taps on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            Hyprland
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          <strong className="text-zinc-900 dark:text-zinc-200">touchy</strong> streams hardware keyboard events through <code className="font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1 py-0.5 rounded">libinput</code> and automatically disables the touchpad while you type. Zero lag, ultra-responsive, and gamer friendly.
        </p>

        {/* Quick Install Command Box */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative group flex items-center justify-between rounded-xl bg-zinc-900 text-zinc-100 p-4 font-mono text-xs sm:text-sm border border-zinc-800 shadow-xl overflow-x-auto">
            <span className="text-amber-400 mr-2 select-none">$</span>
            <span className="flex-1 text-left select-all">
              curl -sL https://raw.githubusercontent.com/tekromancy/touchy/refs/heads/main/bootstrap.sh | bash
            </span>
            <button
              onClick={() =>
                copyToClipboard(
                  "curl -sL https://raw.githubusercontent.com/tekromancy/touchy/refs/heads/main/bootstrap.sh | bash",
                  "quick-install"
                )
              }
              className="ml-4 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-sans transition-colors border border-zinc-700 shrink-0 text-zinc-300 hover:text-white"
              title="Copy to clipboard"
            >
              {copiedId === "quick-install" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            Automated bootstrap or build via CMake in seconds.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#install"
            className="px-6 py-3 rounded-xl bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors shadow-sm"
          >
            Get Started
          </a>
          <a
            href="#config"
            className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-800 dark:text-zinc-200"
          >
            Configuration Guide
          </a>
          <a
            href="https://github.com/Tekromancy/touchy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* AdSense Top Banner */}
      <AdBanner slot="1010101010" />

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Why Use touchy?
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A specialized daemon designed to solve the annoying palm-brush problem on Linux laptops once and for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-xl mb-4 text-amber-600 dark:text-amber-400">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Instantaneous Kernel Stream
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Streams raw keyboard events directly from <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">libinput debug-events</code>. Touchpad lockout triggers on the very first keypress without waiting for compositor event routing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-xl mb-4 text-amber-600 dark:text-amber-400">
              🎮
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Integrated Game Mode
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Playing an FPS or trackpad game? Simply touch a semaphore lock file (<code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">/tmp/.game_mode_on</code>) and touchy gracefully suspends lockout behavior so your controls remain active.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-xl mb-4 text-amber-600 dark:text-amber-400">
              🎛️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Full Configuration Cascading
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Configure your device name, timeout debounce, notification verbosity, and log levels via <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">~/.touchyrc</code>, <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">~/.config/touchy/touchyrc</code>, or environment variables.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Installation
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Choose between the one-line bootstrap installer or building from source using CMake:
          </p>

          <div className="space-y-6">
            {/* Method 1: Bootstrap */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                Method 1: Fast Automated Bootstrap
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Downloads the latest release archive, extracts, builds, and installs the binary and man pages to <code className="font-mono">/usr/local/bin</code>:
              </p>
              <div className="relative flex items-center justify-between rounded-xl bg-zinc-950 text-zinc-100 p-3 font-mono text-xs sm:text-sm">
                <span className="select-all">
                  curl -sL https://raw.githubusercontent.com/tekromancy/touchy/refs/heads/main/bootstrap.sh | bash
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "curl -sL https://raw.githubusercontent.com/tekromancy/touchy/refs/heads/main/bootstrap.sh | bash",
                      "boot-copy"
                    )
                  }
                  className="ml-3 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs shrink-0"
                >
                  {copiedId === "boot-copy" ? "✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Method 2: Manual Git Clone & CMake */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                Method 2: Manual Clone & CMake Build
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Clone the repository, inspect the code, and install using the included CMake scripts:
              </p>
              <div className="relative rounded-xl bg-zinc-950 text-zinc-100 p-4 font-mono text-xs sm:text-sm space-y-1">
                <div>git clone https://github.com/Tekromancy/touchy.git</div>
                <div>cd touchy</div>
                <div>cmake .</div>
                <div>make</div>
                <div>sudo make install</div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 text-sm">
              <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                System Prerequisites
              </h4>
              <p className="text-amber-800 dark:text-amber-400">
                Requires <code className="font-mono font-bold">hyprland</code> (with <code className="font-mono font-bold">hyprctl</code>), <code className="font-mono font-bold">libinput</code> (with <code className="font-mono font-bold">libinput-tools</code>), and optional <code className="font-mono font-bold">libnotify</code> for notification toasts. Ensure your user belongs to the <code className="font-mono font-bold">input</code> group to read <code className="font-mono">libinput debug-events</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autostart Setup */}
      <section id="autostart" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Hyprland Autostart Integration
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            To start <code className="font-mono">touchy</code> automatically when Hyprland launches your session, add an <code className="font-mono">exec-once</code> directive to your Hyprland configuration:
          </p>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-400">~/.config/hypr/hyprland.conf (or autostart.conf)</span>
              <button
                onClick={() =>
                  copyToClipboard(
                    "# Enhanced touchpad disable-while-typing daemon\nexec-once = /usr/local/bin/touchy",
                    "autostart-copy"
                  )
                }
                className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300"
              >
                {copiedId === "autostart-copy" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="rounded-xl bg-zinc-950 text-zinc-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
              <code>{`# Enhanced touchpad disable-while-typing daemon
exec-once = /usr/local/bin/touchy`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Mid Banner */}
      <AdBanner slot="2020202020" />

      {/* Configuration & Environment Variables */}
      <section id="config" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Configuration & Environment
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            touchy can be configured via environment variables or in an RC file located at <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">~/.touchyrc</code> or <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">~/.config/touchy/touchyrc</code>.
          </p>

          {/* Finding your touchpad device */}
          <div className="mb-6 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
              Finding Your Touchpad Device Name
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Run <code className="font-mono">hyprctl devices</code> to list input devices detected by Hyprland, and look for your touchpad identifier:
            </p>
            <div className="rounded-xl bg-zinc-950 text-zinc-100 p-3 font-mono text-xs sm:text-sm">
              hyprctl devices | grep -i touchpad -B 2 -A 5
            </div>
          </div>

          {/* Config options table */}
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 font-semibold border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th className="p-3">Variable</th>
                  <th className="p-3">Default</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono text-xs">
                <tr>
                  <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">TOUCHPAD</td>
                  <td className="p-3">asuf1209:00-2808:0219-touchpad</td>
                  <td className="p-3 font-sans text-xs">Target touchpad device identifier in hyprctl.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">TOUCHY_DELAY</td>
                  <td className="p-3">1</td>
                  <td className="p-3 font-sans text-xs">Debounce sleep time in seconds after typing ends before re-enabling trackpad.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">GAME_MODE_SEMAFORE_FILE</td>
                  <td className="p-3">/tmp/.game_mode_on</td>
                  <td className="p-3 font-sans text-xs">File path indicating game mode is active (locks touchpad disabling).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">TOUCHY_VERBOSITY</td>
                  <td className="p-3">1</td>
                  <td className="p-3 font-sans text-xs">Console & notify-send verbosity level (higher = more logs & toast popups).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">TOUCHY_LOGLEVEL</td>
                  <td className="p-3">0</td>
                  <td className="p-3 font-sans text-xs">File log level for disk reporting in <code className="font-mono">/tmp/.touchy.log</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Example ~/.touchyrc */}
          <div className="mt-6 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">
              Example ~/.touchyrc
            </h3>
            <pre className="rounded-xl bg-zinc-950 text-zinc-100 p-4 font-mono text-xs overflow-x-auto">
              <code>{`# Touchpad device from 'hyprctl devices'
TOUCHPAD="synps/2-synaptics-touchpad"

# Delay in seconds to wait after last keypress
TOUCHY_DELAY=0.8

# Keep desktop quiet
TOUCHY_VERBOSITY=0`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Game Mode Section */}
      <section id="gamemode" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Game Mode Integration
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            When gaming on laptops, holding down movement keys (WASD) while aiming or clicking with the touchpad is essential. touchy checks for the presence of a semaphore file and bypasses lockout when enabled:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Enable Game Mode
              </h3>
              <p className="text-xs text-zinc-500 mb-3">
                Touch the semaphore file. The touchpad will stay active during keypresses:
              </p>
              <div className="relative rounded-lg bg-zinc-950 text-zinc-100 p-2.5 font-mono text-xs">
                touch /tmp/.game_mode_on
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Disable Game Mode
              </h3>
              <p className="text-xs text-zinc-500 mb-3">
                Remove the semaphore file to resume normal disable-while-typing:
              </p>
              <div className="relative rounded-lg bg-zinc-950 text-zinc-100 p-2.5 font-mono text-xs">
                rm -f /tmp/.game_mode_on
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting & FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                Why does libinput report permission denied?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Reading raw device events via <code className="font-mono">libinput debug-events</code> requires access to <code className="font-mono">/dev/input/event*</code>. Add your user to the input group via <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">sudo usermod -a -G input $USER</code>, then log out and back in.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                Can I adapt touchy for Sway or River compositors?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Yes! The core event loop monitors libinput. Replacing the <code className="font-mono">hyprctl keyword device[...]</code> invocations with <code className="font-mono">swaymsg input &quot;&lt;device&gt;&quot; events disabled</code> is straightforward. Pull requests are welcomed!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom AdSense Banner */}
      <AdBanner slot="3030303030" />
    </div>
  );
}
