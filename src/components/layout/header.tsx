"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DonationModal } from "@/components/donation-modal";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Impact", href: "#roadmap" },
  { label: "Get Involved", href: "#involved" },
];

export function Header() {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openDonationModal = () => {
    setMobileOpen(false);
    setDonationModalOpen(true);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
        style={{
          background: "color-mix(in oklab, var(--paper) 88%, transparent)",
          borderColor: "color-mix(in oklab, var(--line) 70%, transparent)",
        }}
      >
        <div className="wrap flex h-[68px] items-center justify-between gap-3 min-[880px]:h-[72px]">
          <Link
            href="#top"
            className="flex min-w-0 items-center gap-2.5 text-ink min-[420px]:gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="The Pink & White Initiative"
              width={36}
              height={36}
              className="h-9 w-9 flex-shrink-0 object-contain"
              priority
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="serif truncate text-[1rem] tracking-tight min-[420px]:text-[1.1rem]">
                Pink &amp; White
              </span>
              <span className="mono mt-[3px] hidden text-[0.62rem] uppercase tracking-[0.18em] text-ink-mute min-[420px]:block">
                Initiative · Est. 2024
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-[30px] min-[880px]:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1.5 text-[0.88rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openDonationModal}
              className="btn px-4 py-2.5 text-[0.82rem] max-[360px]:hidden min-[880px]:px-[22px] min-[880px]:py-[11px] min-[880px]:text-[0.88rem]"
            >
              Donate
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>

            <button
              type="button"
              className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-pink-500 hover:text-pink-700 min-[880px]:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-line bg-paper shadow-[0_18px_40px_-28px_rgba(26,16,16,0.45)] min-[880px]:hidden"
          >
            <nav className="wrap flex flex-col py-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-line/70 py-3.5 text-[1rem] text-ink-soft transition-colors last:border-b-0 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openDonationModal}
                className="btn mt-4 justify-center min-[360px]:hidden"
              >
                Donate
              </button>
            </nav>
          </div>
        )}
      </header>

      <DonationModal
        open={donationModalOpen}
        onOpenChange={setDonationModalOpen}
      />
    </>
  );
}
