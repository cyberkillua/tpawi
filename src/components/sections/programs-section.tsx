import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="w-full bg-pink-50 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Programs
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              Comprehensive initiatives designed to address health illiteracy
              and improve well-being across communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="Community Pad Banks"
            description="Providing free or subsidized menstrual hygiene products to underserved communities."
            content="Establishing 50 pad banks within three years, serving as hubs for health education on hygiene, reproductive health, and overall wellness."
          />
          <ProgramCard
            title="Health Literacy Campaigns"
            description="Educating communities on essential health topics across generations."
            content="Covering disease prevention, hygiene, nutrition, maternal and child health, reproductive health, and aging wellness."
          />
          <ProgramCard
            title="School & Community Programs"
            description="Delivering age-appropriate health education to children, adolescents, and adults."
            content="Including menstrual health education for girls, basic hygiene for children, and wellness education for older adults."
          />
          <ProgramCard
            title="Mobile Health Clinics"
            description="Bringing health education and basic medical services to remote areas."
            content="Providing menstrual products, basic check-ups, wellness screenings, and health guidance for all age groups."
          />
          <ProgramCard
            title="Policy Advocacy"
            description="Working with policymakers to improve health access and education."
            content="Advocating for tax-free hygiene products, comprehensive health education in schools, and improved healthcare access."
          />
          <ProgramCard
            title="Partnerships"
            description="Collaborating with organizations to expand our reach and impact."
            content="Building strategic partnerships with healthcare providers, educational institutions, and community organizations."
          />
        </div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  content: string;
}

function ProgramCard({ title, description, content }: ProgramCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{content}</p>
      </CardContent>
    </Card>
  );
}
