export function BeneficiariesSection() {
  return (
    <section id="beneficiaries" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Target Beneficiaries
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              Our initiatives reach diverse populations with a focus on those
              most vulnerable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <BeneficiaryCard
            label="9-17"
            title="Young Girls in Schools"
            description="Girls who struggle with accessing menstrual products, which can negatively impact their education."
          />
          <BeneficiaryCard
            label="18-24"
            title="Young Women"
            description="Women who face financial barriers to affording menstrual products."
          />
          <BeneficiaryCard
            label="Families"
            title="Low-Income Families"
            description="Households with limited access to healthcare and educational resources."
          />
          <BeneficiaryCard
            label="Rural"
            title="Rural Communities"
            description="Areas with limited access to healthcare services and educational opportunities."
          />
          <BeneficiaryCard
            label="Stigma"
            title="Affected by Stigma"
            description="Those dealing with cultural or social stigmas related to menstruation, helping to mitigate isolation and health risks."
          />
          <BeneficiaryCard
            label="Public"
            title="General Public"
            description="Raising awareness and improving health literacy among everyone to foster a more informed and supportive community."
          />
        </div>
      </div>
    </section>
  );
}

interface BeneficiaryCardProps {
  label: string;
  title: string;
  description: string;
}

function BeneficiaryCard({ label, title, description }: BeneficiaryCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
        <span className="text-xl font-bold text-pink-500">{label}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-sm text-gray-500">{description}</p>
    </div>
  );
}
