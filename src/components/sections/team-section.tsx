import Image from "next/image";

type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

const TEAM: Member[] = [
  {
    name: "Faizah Alayo",
    role: "Head of Research",
    bio: "Pharmacist. Researcher.",
    image: "/optimized/team/faizah.webp",
  },
  {
    name: "Moshood Alimi",
    role: "Head of Software, AI/ML",
    bio: "Software Engineer. AI/ML Consultant.",
    image: "/optimized/team/mosh.webp",
  },
  {
    name: "Haneefah Akolawole",
    role: "Head of Content",
    bio: "PharmD in view.",
    image: "/optimized/team/hanifah.webp",
  },
  {
    name: "Sarat Jimoh",
    role: "Volunteer Coordinator",
    bio: "PharmD in view.",
    image: "/optimized/team/sarat.webp",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-pad bg-paper">
      <div className="wrap">
        <div className="mb-[70px] grid items-end gap-[60px] min-[880px]:grid-cols-2">
          <div>
            <span className="eyebrow">The team</span>
            <h2 className="mt-4">The people behind the work.</h2>
          </div>
          <p className="max-w-[48ch] text-ink-soft">
            A small, deliberate team of researchers, healthcare professionals,
            educators, and community organizers — each bringing the lived
            experience and expertise the work requires.
          </p>
        </div>

        {/* Founder feature */}
        <div className="mb-20 grid items-center gap-[clamp(30px,5vw,70px)] min-[880px]:grid-cols-[1.05fr_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
            <Image
              src="/optimized/team/suu.webp"
              alt="Surajah Surajudeen-Bakinde, Founder & Executive Director"
              fill
              sizes="(max-width: 880px) 100vw, 48vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="mono absolute left-5 top-5 rounded-full bg-paper px-3.5 py-2 text-[0.65rem] uppercase tracking-[0.16em]">
              Founder
            </div>
          </div>
          <div>
            <div className="serif text-[clamp(1.5rem,2.4vw,2.1rem)] italic leading-[1.3] text-ink">
              <span className="not-italic text-pink-500" style={{ fontSize: "1.5em", lineHeight: 0, verticalAlign: "-0.2em" }}>
                “
              </span>
              I created TPAWI from a belief that many health challenges in
              our communities are driven by poor health literacy and
              preventable misconceptions. At its core, TPAWI exists to make
              health information accessible and practical, bridging the gap
              between knowledge and better health outcomes for all.
              <span className="not-italic text-pink-500" style={{ fontSize: "1.5em", lineHeight: 0, verticalAlign: "-0.2em" }}>
                ”
              </span>
            </div>
            <div className="mt-9 border-t border-line pt-7">
              <div className="serif text-[1.6rem]">
                Surajah Surajudeen-Bakinde
              </div>
              <div className="mono mt-1.5 text-[0.74rem] uppercase tracking-[0.16em] text-pink-700">
                Founder &amp; Executive Director
              </div>
              <p className="mt-5 leading-[1.7] text-ink-soft">
                A public health advocate with a background in community
                organizing and program design. Surajah leads strategy,
                partnerships, and the long-range vision for the Initiative —
                building the kind of infrastructure that outlasts any one
                campaign.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1">
          {TEAM.map((m) => (
            <div key={m.name} className="flex flex-col">
              <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-[3px] bg-paper-2">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 540px) 100vw, (max-width: 1000px) 50vw, 25vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="stripe-pink-soft mono absolute inset-0 grid place-items-center px-3 py-3 text-center text-[0.66rem] uppercase tracking-[0.14em] text-ink-soft">
                    [ Portrait — drop image ]
                  </div>
                )}
              </div>
              <div className="serif text-[1.2rem] leading-[1.2]">{m.name}</div>
              <div className="mono mt-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
                {m.role}
              </div>
              <p className="mt-2.5 text-[0.88rem] leading-[1.55] text-ink-soft">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
