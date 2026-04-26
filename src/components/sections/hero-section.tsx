import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative pb-[clamp(40px,6vw,80px)] pt-[clamp(40px,6vw,80px)]"
    >
      <div className="wrap grid items-center gap-[clamp(32px,5vw,80px)] min-[880px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">A non-profit, headquartered in Lagos</span>
          <h1 className="mt-6">
            Health literacy <span className="ital-pink">for</span>
            <br />
            <span className="marker-bg">every body,</span>
            <br />
            <span className="ital-pink">every age.</span>
          </h1>
          <p className="mt-7 max-w-[48ch] text-[1.15rem] leading-[1.6] text-ink-soft">
            TPAWI (The Pink and White Empowerment Initiative) is a youth-led
            public health organisation improving health literacy and equitable
            health outcomes in underserved communities across Nigeria. Through
            digital campaigns, school programmes, research, and advocacy, we
            empower women, girls, and families with accessible health education
            and support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link href="#programs" className="btn">
              Explore our work
            </Link>
            <Link href="#involved" className="btn btn-outline">
              Get involved
            </Link>
          </div>

          <div className="mt-12 grid max-w-[560px] grid-cols-3 gap-6">
            <Stat n="135K+" l="People reached, online & offline" />
            <Stat n="82" l="Active volunteers" />
            <Stat n="4" l="States: Lagos, Kwara, Ogun, Oyo" />
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
          <Image
            src="/front-page.svg"
            alt="TPAWI front page illustration"
            fill
            className="object-cover"
            sizes="(max-width: 880px) 100vw, 45vw"
            priority
          />
          <div
            className="mono absolute bottom-6 left-6 rounded-[2px] bg-paper px-[18px] py-3.5 text-[0.7rem] uppercase tracking-[0.14em] text-ink"
            style={{ boxShadow: "0 24px 60px -20px rgba(80, 30, 30, 0.25)" }}
          >
            <span
              className="pulse-dot mr-2 inline-block h-2 w-2 rounded-full bg-pink-500"
              style={{ verticalAlign: "1px" }}
            />
            Live in Lagos, Kwara, Ogun & Oyo
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="serif text-[2.2rem] leading-none text-ink">{n}</div>
      <div className="mono mt-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
        {l}
      </div>
    </div>
  );
}
