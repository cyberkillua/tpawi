import Link from "next/link";

const MEMBERSHIP_FORM_URL = "https://forms.gle/RTzfri36EtSvHmxdA";
const VOLUNTEER_FORM_URL =
  "https://8d85c339.sibforms.com/serve/MUIFAHs8bs0C3dIdS4zLFIZb-cPTXCO37zepExzD6crqha580Z6oXWbrgejYmgCXlt6snLOwdBFDdRo8-x4g_zK18iYP8XqCbZxi9nNCRbsSgTAAZR2ofZIGTOBKk6-v6XbnOa9PNMlwqvDdWK4MHSX95CQwOfjMIkvPwszAmrlhdou9e8rS87nyrhIkwgNj7CbDSPY85Xe313y8UA==";
const RESEARCH_FORM_URL =
  "https://8d85c339.sibforms.com/serve/MUIFALdH6gq9NYjg91rAUR4kK6454HBrHrfS204Cl3Rw_95Y89hnaK1o7x3HoMTtmvIXqMtE5ucw2JN62ksMJ7cN4aLWGUnFH28SkbrHjkND5aptNXzmd4a4kKiCuyAssgbyK-AZ36f4zSM3H-AbOD2Rt1r0vF22uS0Z8J3TUdpTx_B5xjo0Z_-A5xVgg5EGtNRxUFSppg-jdQZgqg==";

const WAYS = [
  {
    num: "01 / Members",
    title: "Become a member",
    body: "Join from ₦2,000 a month. Four tiers, all with full transparency on where your contribution goes.",
    href: MEMBERSHIP_FORM_URL,
  },
  {
    num: "02 / Volunteer",
    title: "Volunteer with us",
    body: "Outreach days, distribution events, school visits. We'll match you to where you can do the most.",
    href: VOLUNTEER_FORM_URL,
  },
  {
    num: "03 / Research",
    title: "Join the research team",
    body: "Health literacy, menstrual equity, behavioral change — contribute to evidence-based programs.",
    href: RESEARCH_FORM_URL,
  },
  {
    num: "04 / Partner",
    title: "Partner with us",
    body: "NGOs, schools, healthcare providers, brands — we work with partners committed to long-term impact.",
    href: "mailto:pinkwhiteinitiative@gmail.com?subject=Partnership%20enquiry",
  },
];

export function GetInvolvedSection() {
  return (
    <section id="involved" className="section-pad bg-pink-500 text-white">
      <div className="wrap">
        <div className="mb-[60px] grid items-end gap-[60px] min-[880px]:grid-cols-2">
          <div>
            <span className="eyebrow on-pink">Get involved</span>
            <h2 className="mt-4 text-white">
              Four ways to
              <br />
              show up.
            </h2>
          </div>
          <p className="max-w-[50ch] text-white/80">
            Whether you have time, expertise, or resources — there is a way to
            make this work yours. Pick the one that fits.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3.5 max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1">
          {WAYS.map((w) => (
            <Link
              key={w.num}
              href={w.href}
              target={w.href.startsWith("http") ? "_blank" : undefined}
              rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex min-h-[280px] flex-col gap-3.5 rounded-[6px] border border-white/20 bg-white/10 p-7 text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.22]"
            >
              <div className="mono text-[0.7rem] uppercase tracking-[0.16em] text-white/75">
                {w.num}
              </div>
              <div className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-white/40 transition-all duration-200 group-hover:rotate-[-45deg] group-hover:bg-white group-hover:text-pink-600">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="serif mt-auto text-[1.5rem] text-white">
                {w.title}
              </h3>
              <p className="text-[0.88rem] text-white/85">{w.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
