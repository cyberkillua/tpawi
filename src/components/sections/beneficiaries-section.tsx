export function BeneficiariesSection() {
  return (
    <section id="beneficiaries" className="section-pad bg-paper">
      <div className="wrap">
        <div className="mx-auto mb-[70px] max-w-[48ch] text-center">
          <span className="eyebrow">Who we serve</span>
          <h2 className="mt-4">
            Reaching those most often{" "}
            <em className="ital-pink">overlooked.</em>
          </h2>
          <p className="mt-4 text-ink-soft">
            Our programs are designed to find the people facing the steepest
            barriers — and meet them with the resources they actually need.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-6 gap-3.5 max-[1000px]:grid-cols-3 max-[600px]:grid-cols-2">
          <Tile
            feature
            age="Ages 9–17"
            title="Young girls in schools"
            body="Girls who miss class, lose confidence, or drop out for lack of menstrual products. Our pad banks and school programs put dignity back on the desk."
          />
          <Tile
            age="Ages 18–24"
            title="Young women"
            body="Facing the financial weight of period poverty."
          />
          <Tile
            age="Households"
            title="Low-income families"
            body="Limited access to healthcare and literacy resources."
          />
          <Tile
            dark
            age="Geography"
            title="Rural communities"
            body="Remote villages where the nearest clinic is hours away — and where mobile health visits and pad banks have outsized impact."
          />
          <Tile
            age="Cultural barriers"
            title="Affected by stigma"
            body="Those isolated by taboos around menstruation and reproductive health."
          />
          <Tile
            age="Everyone"
            title="The general public"
            body="Because health literacy lifts whole communities, not just individuals."
          />
        </div>
      </div>
    </section>
  );
}

function Tile({
  age,
  title,
  body,
  feature,
  dark,
}: {
  age: string;
  title: string;
  body: string;
  feature?: boolean;
  dark?: boolean;
}) {
  const base =
    "relative col-span-2 flex flex-col justify-between overflow-hidden rounded border p-6 transition-all hover:-translate-y-1 max-[600px]:col-span-1";
  const variant = feature
    ? "min-[1000px]:col-span-3 min-[1000px]:row-span-2 bg-pink-500 border-pink-500 text-white max-[600px]:col-span-2"
    : dark
      ? "min-[1000px]:col-span-3 bg-ink border-ink text-paper max-[600px]:col-span-2"
      : "bg-paper border-line hover:border-pink-300";

  const ageColor = feature || dark ? "text-white/80" : "text-pink-700";
  const titleSize = feature ? "text-[2.2rem] mt-6" : "text-[1.4rem] mt-3";
  const bodyColor = feature || dark ? "text-white/85" : "text-ink-soft";

  return (
    <div className={`${base} ${variant}`}>
      <div>
        <div
          className={`mono text-[0.7rem] uppercase tracking-[0.16em] ${ageColor}`}
        >
          {age}
        </div>
        <h3 className={`serif font-normal ${titleSize}`}>{title}</h3>
      </div>
      <p className={`mt-3 text-[0.9rem] ${bodyColor}`}>{body}</p>
    </div>
  );
}
