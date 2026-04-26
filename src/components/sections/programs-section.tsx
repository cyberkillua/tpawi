const PROGRAMS = [
  {
    idx: "P / 01",
    title: "The Pink Banks",
    desc: "Free or subsidised menstrual products through pad and period storage banks in schools and communities — and a hub for menstrual and reproductive health education.",
  },
  {
    idx: "P / 02",
    title: "Health Literacy Campaigns",
    desc: "Digital and community outreach on prevention, hygiene, nutrition, maternal and child health, and overall wellness.",
  },
  {
    idx: "P / 03",
    title: "School & Community Programmes",
    desc: "Age-appropriate health education and interactive learning tools for children, adolescents, and adults in schools and community settings.",
  },
  {
    idx: "P / 04",
    title: "Mobile Health Clinics",
    desc: "Taking health education, basic screenings, menstrual support, and referrals directly to remote and underserved communities.",
  },
  {
    idx: "P / 05",
    title: "Policy Advocacy",
    desc: "Driving reforms that improve health access, menstrual equity, and comprehensive health education across schools and communities.",
  },
  {
    idx: "P / 06",
    title: "Ground Research",
    desc: "Community-based research and policy-ready evidence — including the MHL Index — to inform programmes and advocacy.",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="section-pad bg-paper-2">
      <div className="wrap">
        <div className="mb-[60px] grid items-end gap-[60px] min-[880px]:grid-cols-2">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4">
              Six programs,
              <br />
              one mission.
            </h2>
          </div>
          <p className="max-w-[48ch] text-ink-soft">
            Each program is a tested response to a specific gap — designed in
            collaboration with the people we serve, refined every cycle.
          </p>
        </div>

        <div className="flex flex-col border-t border-line">
          {PROGRAMS.map((p) => (
            <div
              key={p.idx}
              className="group grid cursor-pointer grid-cols-[80px_1fr_1fr_60px] items-center gap-8 border-b border-line py-7 transition-all duration-300 hover:bg-pink-100/50 hover:px-4 max-[720px]:grid-cols-[50px_1fr] max-[720px]:gap-3.5"
            >
              <div className="mono text-[0.78rem] tracking-[0.1em] text-ink-mute">
                {p.idx}
              </div>
              <div className="serif text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.1]">
                {p.title}
              </div>
              <div className="text-[0.95rem] text-ink-soft max-[720px]:hidden">
                {p.desc}
              </div>
              <div className="grid h-[42px] w-[42px] place-items-center rounded-full border border-ink transition-all duration-200 group-hover:rotate-[-45deg] group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white max-[720px]:hidden">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
