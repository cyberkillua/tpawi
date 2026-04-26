"use client";

import { useEffect, useState } from "react";

const ONE_TIME_AMOUNTS = [
  "₦2,000",
  "₦5,000",
  "₦10,000",
  "₦20,000",
  "₦50,000",
  "Custom",
];

const MONTHLY_AMOUNTS = ["₦2,000", "₦5,000", "₦10,000", "₦50,000"];

const PAYSTACK_ONE_TIME = "https://paystack.shop/pay/otp-onetimepink";

const PAYSTACK_MONTHLY: Record<string, string> = {
  "₦2,000": "https://paystack.shop/pay/pinkpalmonthly",
  "₦5,000": "https://paystack.shop/pay/pinkallymonthly",
  "₦10,000": "https://paystack.shop/pay/pinkpartnermonthly",
  "₦50,000": "https://paystack.shop/pay/pinkadvocatemonthly",
};

function amountToNaira(label: string): number | null {
  if (label === "Custom") return null;
  const n = parseInt(label.replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function buildOneTimeUrl(amountLabel: string): string {
  const naira = amountToNaira(amountLabel);
  if (naira === null) return PAYSTACK_ONE_TIME;
  return `${PAYSTACK_ONE_TIME}?amount=${naira}`;
}

const MONTHLY_IMPACT: Record<string, string> = {
  "₦2,000": "Your ₦2,000 pays for one reusable pad.",
  "₦5,000":
    "Your ₦5,000 a month pays for an educational resource material.",
  "₦10,000": "Your ₦10,000 a month pays for fieldwork.",
  "₦50,000":
    "Your ₦50,000 a month helps keep the whole organisation running.",
};

const ONE_TIME_IMPACT = "Your generosity will help change a life.";

export function DonateSection() {
  const [freq, setFreq] = useState<"Monthly" | "One-time">("Monthly");
  const [amount, setAmount] = useState("₦5,000");

  const amounts = freq === "Monthly" ? MONTHLY_AMOUNTS : ONE_TIME_AMOUNTS;

  // If the selected amount isn't valid for the current frequency, snap to a default.
  useEffect(() => {
    if (!amounts.includes(amount)) {
      setAmount("₦5,000");
    }
  }, [freq, amounts, amount]);

  const monthlyHref =
    freq === "Monthly" ? PAYSTACK_MONTHLY[amount] : undefined;

  return (
    <section
      id="donate"
      className="border-y border-line bg-paper py-[clamp(48px,8vw,100px)]"
    >
      <div className="wrap grid items-center gap-[60px] min-[880px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">Support the work</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)]">
            Every <span className="ital-pink">naira</span> stocks a pad bank,
            <br />
            fuels a clinic, opens a classroom.
          </h2>
          <p className="mt-4 max-w-[46ch] text-ink-soft">
            We publish a quarterly impact report so every supporter sees
            exactly where their contribution went. No black box, no
            boilerplate.
          </p>
        </div>

        <div className="rounded-[6px] bg-ink p-9 text-paper">
          <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/70">
            Choose an amount
          </label>
          <div
            className={`mt-5 grid gap-2 ${
              freq === "Monthly" ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className={`serif cursor-pointer rounded-[3px] border py-3.5 text-[1.1rem] transition-all ${
                  amount === a
                    ? "border-pink-500 bg-pink-500 text-white"
                    : "border-paper/25 bg-transparent text-paper hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-1.5 rounded-full bg-white/[0.08] p-1">
            {(["Monthly", "One-time"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFreq(f)}
                className={`flex-1 rounded-full border-0 px-3.5 py-2 text-[0.85rem] transition-all ${
                  freq === f
                    ? "bg-paper text-ink"
                    : "bg-transparent text-paper"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {freq === "One-time" ? (
            <a
              href={buildOneTimeUrl(amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full cursor-pointer rounded-[3px] border-0 bg-pink-500 p-4 text-center text-[0.95rem] font-medium text-white transition-colors hover:bg-pink-600"
            >
              Donate {amount} one-time →
            </a>
          ) : (
            <a
              href={monthlyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full cursor-pointer rounded-[3px] border-0 bg-pink-500 p-4 text-center text-[0.95rem] font-medium text-white transition-colors hover:bg-pink-600"
            >
              Donate {amount} monthly →
            </a>
          )}

          <div className="mt-[18px] text-[0.82rem] text-pink-300">
            {freq === "Monthly"
              ? (MONTHLY_IMPACT[amount] ?? "")
              : ONE_TIME_IMPACT}
          </div>
        </div>
      </div>
    </section>
  );
}
