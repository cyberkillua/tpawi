type Item = string | { text: string; sub: string[] };

const HORIZONS: {
  key: "now" | "mid" | "long";
  title: string;
  year: string;
  items: Item[];
}[] = [
  {
    key: "now",
    title: "Now & near",
    year: "1–2 years",
    items: [
      "Reach 250,000 people a year through digital health literacy campaigns.",
      "Pad banks and school health programmes in 15 schools and community hubs.",
      "Operationalise the TPAWI Research Team and pilot the MHL Index.",
      "Build partnerships with 5+ schools, NGOs, PHCs, and media platforms.",
    ],
  },
  {
    key: "mid",
    title: "Mid-horizon",
    year: "3–5 years",
    items: [
      "Reach 500,000 people a year across digital and community campaigns.",
      "Scale pad banks and school programmes to 30 schools.",
      "Publish the first national MHL Index report.",
      "Open formal advocacy with ministries, PHC boards, and legislators.",
    ],
  },
  {
    key: "long",
    title: "Long-horizon",
    year: "5–10 years",
    items: [
      "Reach 5 million+ people — Nigeria’s leading youth-driven health literacy platform.",
      "Pad banks and sustained programmes across 100 schools and community centres.",
      "Establish the MHL Index as a national research and policy instrument.",
      "Win reforms: tax-free menstrual products and stronger health education in schools.",
    ],
  },
];

export function GoalsSection() {
  return (
    <section
      id="roadmap"
      className="section-pad relative overflow-hidden bg-paper-2"
    >
      <div className="wrap">
        <div className="mb-[60px] max-w-[42ch]">
          <span className="eyebrow">The horizon</span>
          <h2 className="mt-4">A ten-year plan, paced honestly.</h2>
          <p className="mt-4 text-ink-soft">
            We measure ourselves by what changes in a girl&apos;s life, not by
            the size of the headline. Here&apos;s what we&apos;re committing to.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[880px]:grid-cols-1">
          {HORIZONS.map((h) => {
            const isNow = h.key === "now";
            return (
              <div
                key={h.key}
                className={`relative flex flex-col gap-5 rounded-[4px] border bg-paper p-8 ${
                  isNow ? "border-pink-300" : "border-line"
                }`}
              >
                <div className="flex items-start justify-between gap-5 border-b border-line pb-5">
                  <div className="serif text-[1.4rem] leading-[1.2]">
                    {h.title}
                  </div>
                  <div
                    className={`mono flex-shrink-0 text-[0.7rem] uppercase tracking-[0.14em] text-pink-700 ${
                      isNow ? "rounded-full bg-pink-100 px-2.5 py-1" : ""
                    }`}
                  >
                    {h.year}
                  </div>
                </div>
                <ul className="flex list-none flex-col gap-3.5 p-0">
                  {h.items.map((item, i) => {
                    const isObj = typeof item !== "string";
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[0.93rem] leading-[1.55] text-ink-soft"
                      >
                        <span
                          className={`mt-[9px] block h-2 w-2 flex-shrink-0 rounded-full ${
                            isNow ? "bg-pink-500" : "bg-pink-300"
                          }`}
                        />
                        <div className="flex-1">
                          <span>{isObj ? item.text : item}</span>
                          {isObj && (
                            <ul className="mt-2 flex list-none flex-col gap-1.5 border-l border-line pl-4">
                              {item.sub.map((s, j) => (
                                <li
                                  key={j}
                                  className="text-[0.88rem] text-ink-soft"
                                >
                                  {s}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
