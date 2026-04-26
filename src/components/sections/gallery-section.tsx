"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryGroup, GalleryItem } from "@/lib/gallery";

type GallerySectionProps = {
  items: GalleryItem[];
  groups: GalleryGroup[];
};

export function GallerySection({ items, groups }: GallerySectionProps) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const filters = [
    { key: "all", label: "All" },
    ...groups.map(({ key, label }) => ({ key, label })),
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const visibleGroups =
    filter === "all" ? groups : groups.filter((group) => group.key === filter);

  return (
    <section id="gallery" className="section-pad bg-ink text-paper">
      <div className="wrap">
        <div className="mb-[60px] flex flex-wrap items-end justify-between gap-10">
          <div>
            <span className="eyebrow on-dark">Gallery</span>
            <h2 className="mt-4 text-paper">
              Moments from
              <br />
              the field.
            </h2>
          </div>
          <p className="max-w-[48ch] text-paper/75">
            A look at outreaches, workshops, and partnerships across Lagos and
            partner communities.
          </p>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-4 py-2 text-[0.82rem] transition-all ${
                  filter === f.key
                    ? "border-pink-500 bg-pink-500 text-white"
                    : "border-paper/25 text-paper hover:border-paper"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-14">
          {visibleGroups.map((group) => {
            const groupItems = items.filter(
              (item) => item.campaign === group.key,
            );

            return (
              <div key={group.key}>
                {filter === "all" && (
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-t border-paper/15 pt-7">
                    <div>
                      <h3 className="serif text-[clamp(1.45rem,2.4vw,2rem)] leading-tight text-paper">
                        {group.label}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-paper/65">
                        {group.description}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid auto-rows-[200px] grid-cols-4 gap-3.5 max-[900px]:grid-cols-2">
                  {groupItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setOpen(item)}
                      className={`group relative cursor-pointer overflow-hidden rounded-[3px] bg-paper-2 ${
                        item.span === "tall"
                          ? "row-span-2"
                          : item.span === "wide"
                            ? "col-span-2"
                            : item.span === "big"
                              ? "col-span-2 row-span-2"
                              : ""
                      }`}
                    >
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 900px) 50vw, 25vw"
                          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                        />
                      ) : (
                        <video
                          src={item.src}
                          poster={item.poster}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                          muted
                          playsInline
                          preload="none"
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2.5 bg-gradient-to-t from-black/75 to-transparent p-[18px] text-left text-white">
                        <div>
                          <div className="mono text-[0.65rem] uppercase tracking-[0.14em] text-white/80">
                            {item.tag}
                          </div>
                          <div className="serif mt-1 text-[1rem] leading-tight">
                            {item.title}
                          </div>
                        </div>
                        {item.type === "video" && (
                          <div className="grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-full border border-white/50 bg-white/25 text-white backdrop-blur">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              style={{ marginLeft: 2 }}
                            >
                              <polygon points="6,4 20,12 6,20" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="btn btn-ghost-light"
          >
            View full archive
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-10"
          style={{ background: "rgba(10,5,5,0.92)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative aspect-[16/10] w-full max-w-[1100px] overflow-hidden rounded bg-ink-mute">
            {open.type === "image" ? (
              <Image
                src={open.src}
                alt={open.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
            ) : (
              <video
                src={open.src}
                poster={open.poster}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                autoPlay
                playsInline
              />
            )}
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border-0 bg-white/15 text-white backdrop-blur"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div>
                <div className="mono text-[0.78rem] text-white/80">
                  {open.tag}
                </div>
                <div className="serif mt-1.5 text-[1.6rem]">{open.title}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
