"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Cat = "all" | "outreach" | "workshop" | "video";

type Item = {
  id: string;
  cat: Exclude<Cat, "all">;
  tag: string;
  title: string;
  src: string;
  type: "image" | "video";
  span?: "tall" | "wide" | "big";
};

const ITEMS: Item[] = [
  {
    id: "g1",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "World Malaria Day Outreach — Lagos",
    src: "/gallery/IMG_4153.jpg",
    type: "image",
    span: "big",
  },
  {
    id: "g2",
    cat: "workshop",
    tag: "Workshop · 2025",
    title: "Listening session, Lagos",
    src: "/gallery/IMG_3882.jpg",
    type: "image",
    span: "tall",
  },
  {
    id: "g3",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Distribution day — community visit",
    src: "/gallery/IMG_4184.jpg",
    type: "image",
  },
  {
    id: "g4",
    cat: "video",
    tag: "Video · field recap",
    title: "Outreach moments on the ground",
    src: "/gallery/vid_1487.mov",
    type: "video",
  },
  {
    id: "g5",
    cat: "workshop",
    tag: "Workshop · 2025",
    title: "School visit — pad bank session",
    src: "/gallery/IMG_4248.jpg",
    type: "image",
    span: "wide",
  },
  {
    id: "g6",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Mobile clinic — registration",
    src: "/gallery/IMG_9110.jpg",
    type: "image",
  },
  {
    id: "g7",
    cat: "workshop",
    tag: "Workshop · 2024",
    title: "Community Q&A — Lagos",
    src: "/gallery/IMG_9111.jpg",
    type: "image",
  },
  {
    id: "g8",
    cat: "video",
    tag: "Video · volunteer day",
    title: "Volunteer day recap",
    src: "/gallery/vid_3879.mov",
    type: "video",
    span: "tall",
  },
  {
    id: "g9",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Distribution day — neighborhood",
    src: "/gallery/IMG_9189.jpg",
    type: "image",
  },
  {
    id: "g10",
    cat: "workshop",
    tag: "Workshop · 2025",
    title: "Partner roundtable — Lagos",
    src: "/gallery/IMG_9197.jpg",
    type: "image",
    span: "wide",
  },
  {
    id: "g11",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Field outreach — Lagos community",
    src: "/gallery/IMG_4249.jpg",
    type: "image",
  },
  {
    id: "g12",
    cat: "workshop",
    tag: "Workshop · 2024",
    title: "Education session — schoolgirls",
    src: "/gallery/IMG_9198.jpg",
    type: "image",
  },
  {
    id: "g13",
    cat: "video",
    tag: "Video · workshop",
    title: "School workshop — moments",
    src: "/gallery/vid_1497.mov",
    type: "video",
  },
  {
    id: "g14",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Group outreach — community",
    src: "/gallery/IMG_9207.jpg",
    type: "image",
  },
  {
    id: "g15",
    cat: "workshop",
    tag: "Workshop · 2025",
    title: "Health literacy session",
    src: "/gallery/IMG_1539.jpg",
    type: "image",
  },
  {
    id: "g16",
    cat: "video",
    tag: "Video · outreach",
    title: "Outreach in motion",
    src: "/gallery/vid_3896.mov",
    type: "video",
  },
  {
    id: "g17",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Market outreach — antimalarial campaign",
    src: "/gallery/IMG_1992.jpg",
    type: "image",
    span: "wide",
  },
  {
    id: "g18",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Volunteer at the field — pink kit",
    src: "/gallery/IMG_1616.jpg",
    type: "image",
    span: "tall",
  },
  {
    id: "g19",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "World Malaria Day — group at the market",
    src: "/gallery/wa_01.jpg",
    type: "image",
    span: "wide",
  },
  {
    id: "g20",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "“I finish my antimalarials” — community pledge",
    src: "/gallery/wa_02.jpg",
    type: "image",
  },
  {
    id: "g21",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Mosquito net distribution",
    src: "/gallery/wa_03.jpg",
    type: "image",
  },
  {
    id: "g22",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Volunteer with a market trader",
    src: "/gallery/wa_04.jpg",
    type: "image",
  },
  {
    id: "g23",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Conversation at the stall",
    src: "/gallery/wa_05.jpg",
    type: "image",
  },
  {
    id: "g24",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Family receiving outreach materials",
    src: "/gallery/wa_06.jpg",
    type: "image",
    span: "tall",
  },
  {
    id: "g25",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Volunteer portrait — market outreach",
    src: "/gallery/wa_07.jpg",
    type: "image",
  },
  {
    id: "g26",
    cat: "outreach",
    tag: "Outreach · 2025",
    title: "Community member with antimalarial pledge",
    src: "/gallery/wa_08.jpg",
    type: "image",
  },
];

const FILTERS: { key: Cat; label: string }[] = [
  { key: "all", label: "All" },
  { key: "outreach", label: "Outreaches" },
  { key: "workshop", label: "Workshops" },
  { key: "video", label: "Videos" },
];

export function GallerySection() {
  const [filter, setFilter] = useState<Cat>("all");
  const [open, setOpen] = useState<Item | null>(null);

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

  const visible =
    filter === "all" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

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
            {FILTERS.map((f) => (
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

        <div className="grid auto-rows-[200px] grid-cols-4 gap-3.5 max-[900px]:grid-cols-2">
          {visible.map((item) => (
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
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                  muted
                  playsInline
                  preload="metadata"
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

        <div className="mt-10 text-center">
          <a href="#events" className="btn btn-ghost-light">
            View full archive
          </a>
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
