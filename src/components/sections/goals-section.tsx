export function GoalsSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Goals
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              Setting ambitious targets to create meaningful change in
              communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <GoalCard
            title="Short-Term (1-2 Years)"
            goals={[
              "Establish pad banks in 30 communities.",
              "Launch the first round of health literacy campaigns and workshops.",
              "Implement school health programs in 10 schools.",
              "Develop partnerships with 5 strategic organisations.",
            ]}
          />
          <GoalCard
            title="Medium-Term (3-5 Years)"
            goals={[
              "Expand pad banks to 50 communities.",
              "Reach 100,000 students with school health programs.",
              "Launch mobile health clinics in 10 rural areas.",
              "Conduct advocacy meetings with key policymakers.",
              "Solidify long-term partnerships with NGOs and government agencies.",
            ]}
          />
          <GoalCard
            title="Long-Term (5-10 Years)"
            goals={[
              "Ensure sustainable access to menstrual hygiene products across all targeted communities.",
              "Scale health literacy campaigns to reach millions of women and girls nationwide.",
              "Achieve policy changes, such as tax-free menstrual products and comprehensive health education in schools.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface GoalCardProps {
  title: string;
  goals: string[];
}

function GoalCard({ title, goals }: GoalCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-xl font-bold text-pink-500">{title}</h3>
      <ul className="space-y-2 text-gray-500">
        {goals.map((goal, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
