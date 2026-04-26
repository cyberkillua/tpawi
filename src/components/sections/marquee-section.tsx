const ITEMS = [
  "Pad banks",
  "Mobile clinics",
  "Health literacy",
  "Menstrual dignity",
  "School outreach",
  "Policy advocacy",
  "Maternal care",
];

export function MarqueeSection() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-ink bg-ink py-[22px] text-paper"
    >
      <div className="marquee-track flex gap-[60px] whitespace-nowrap serif italic text-[1.4rem]">
        <Group />
        <Group />
      </div>
    </div>
  );
}

function Group() {
  return (
    <span className="inline-flex items-center gap-[60px]">
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-[60px]">
          {item}
          <span className="not-italic text-pink-400">✦</span>
        </span>
      ))}
    </span>
  );
}
