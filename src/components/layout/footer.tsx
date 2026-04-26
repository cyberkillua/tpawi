import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-0 py-[80px_40px] pb-10 pt-20 text-paper">
      <div className="wrap">
        <div className="grid gap-10 border-b border-paper/15 pb-[60px] min-[880px]:grid-cols-[1.6fr_1fr_1fr_1fr] max-[540px]:grid-cols-1 max-[880px]:grid-cols-2">
          <div>
            <h4 className="mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper/60">
              The Pink &amp; White Initiative
            </h4>
            <div className="serif mt-2 max-w-[14ch] text-[clamp(2rem,5vw,4rem)] leading-none">
              Health literacy{" "}
              <span className="italic text-pink-300">for every body.</span>
            </div>
            <div className="mt-[18px] flex gap-3.5">
              <Social
                href="https://www.instagram.com/pinkwhiteinitiative?igsh=MTluOW0ybmNpeG5oYw=="
                label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
                </svg>
              </Social>
              <Social href="https://www.twitter.com/tpawinitiative" label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 5.92c-.79.35-1.65.59-2.54.7a4.48 4.48 0 0 0 1.96-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.63 4.09A12.72 12.72 0 0 1 3.11 4.89 4.48 4.48 0 0 0 4.5 10.86a4.45 4.45 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.59 4.39c-.4.11-.82.17-1.26.17-.31 0-.6-.03-.89-.08a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.25 0 12.77-6.84 12.77-12.77 0-.2 0-.39-.01-.58A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z" />
                </svg>
              </Social>
              <Social
                href="https://youtube.com/@tpawinitiative?si=WX4OUnj7QZ20HAmi"
                label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 7s-.2-1.5-.8-2.2c-.7-.8-1.6-.8-2-.9C17.4 3.6 12 3.6 12 3.6s-5.4 0-8.2.3c-.4.1-1.3.1-2 .9C1.2 5.5 1 7 1 7s-.2 1.8-.2 3.6V12c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.2c.7.8 1.7.7 2.1.8 1.5.2 6.6.3 8.1.3 0 0 5.4 0 8.2-.3.4-.1 1.3-.1 2-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6V10.6c0-1.8-.2-3.6-.2-3.6zM9.7 15.3v-7l5.7 3.5-5.7 3.5z" />
                </svg>
              </Social>
              <Social
                href="https://www.tiktok.com/@pinkwhiteinitiative?_t=ZM-8ugGVftZ7jB&_r=1"
                label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.6 6.7a5.4 5.4 0 0 1-3.3-1.1V15a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 1.9 2.7V2h2.9a3.4 3.4 0 0 0 3.4 3.4v2.9z" />
                </svg>
              </Social>
            </div>
          </div>

          <Column
            title="Explore"
            links={[
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Gallery", href: "#gallery" },
              { label: "Team", href: "#team" },
              { label: "Impact", href: "#roadmap" },
            ]}
          />
          <Column
            title="Engage"
            links={[
              { label: "Become a member", href: "#involved" },
              { label: "Volunteer", href: "#involved" },
              { label: "Research team", href: "#involved" },
              { label: "Donate", href: "#donate" },
              { label: "Partner with us", href: "#involved" },
            ]}
          />
          <Column
            title="Reach us"
            links={[
              {
                label: "pinkwhiteinitiative@gmail.com",
                href: "mailto:pinkwhiteinitiative@gmail.com",
              },
              { label: "+234 906 630 3344", href: "tel:+2349066303344" },
              { label: "Lagos, Nigeria", href: "#" },
            ]}
          />
        </div>

        <div className="mono mt-10 flex flex-wrap justify-between gap-5 text-[0.7rem] uppercase tracking-[0.1em] text-paper/55">
          <div>© 2026 THE PINK &amp; WHITE INITIATIVE — A NIGERIAN NON-PROFIT</div>
          <div>HEALTH LITERACY · MENSTRUAL EQUITY · COMMUNITY CARE</div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 text-paper transition-all hover:border-pink-500 hover:bg-pink-500 hover:text-white"
    >
      <span className="block h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{children}</span>
    </Link>
  );
}

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper/60">
        {title}
      </h4>
      <ul className="mt-[18px] flex list-none flex-col gap-2.5 p-0">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[0.92rem] text-paper transition-colors hover:text-pink-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
