export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,100px)] min-[880px]:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">About</span>
          <h2 className="mt-4">
            A quiet revolution
            <br />
            in everyday <em className="ital-pink">care.</em>
          </h2>
        </div>
        <div>
          <p className="serif border-l-[3px] border-pink-500 pl-6 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.35] text-ink">
            Founded in 2024, The Pink and White Empowerment Initiative confronts
            a stubborn problem: too many people lack access to accurate health
            information and the basic products that make wellness possible.
          </p>
          <div className="body-cols mt-8 text-[1rem] leading-[1.7] text-ink-soft">
            <p>
              TPAWI&apos;s mission is to empower communities by addressing
              public health challenges and reducing health illiteracy across all
              ages and genders. Through essential health education, resources,
              and community-based programs, we strive to create healthier,
              informed populations.
            </p>
            <p className="mt-3.5">
              We envision a world where every individual — regardless of age or
              gender — has access to accurate health information, essential
              resources, and the opportunity to lead a dignified and healthy
              life.
            </p>
          </div>
          <div className="mt-9 flex items-center gap-3.5">
            <div>
              <div className="serif text-[1.1rem] italic">
                — Surajah Surajudeen-Bakinde
              </div>
              <span className="mono mt-0.5 block text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
                Founder &amp; Managing Director
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="mt-20 grid border-t border-line min-[880px]:grid-cols-3">
          <Pillar
            num="01 — Inclusive"
            title="For every life stage"
            body="From schoolgirls to grandmothers — programs designed across the lifespan, with no one quietly left behind."
          />
          <Pillar
            num="02 — Educational"
            title="Knowledge first"
            body="Hygiene, nutrition, disease prevention, reproductive health — taught in plain language, in local context."
          />
          <Pillar
            num="03 — Sustained"
            title="Built to last"
            body="Pad banks, mobile clinics, and partnerships that outlive any single visit. Infrastructure, not events."
            last
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  num,
  title,
  body,
  last,
}: {
  num: string;
  title: string;
  body: string;
  last?: boolean;
}) {
  return (
    <div
      className={`px-0 py-8 pr-7 max-[880px]:border-b max-[880px]:border-line ${
        last ? "" : "min-[880px]:border-r min-[880px]:border-line"
      } ${last ? "max-[880px]:border-b-0" : ""}`}
    >
      <div className="mono text-[0.7rem] uppercase tracking-[0.18em] text-pink-700">
        {num}
      </div>
      <h4 className="serif mt-3.5 text-[1.5rem] font-normal">{title}</h4>
      <p className="mt-2.5 text-[0.95rem] text-ink-soft">{body}</p>
    </div>
  );
}
