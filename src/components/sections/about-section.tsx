import { Users, BookOpen, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
              Our Vision
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Our Initiative
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              Founded in 2024 by Surajah Surajudeen-Bakinde, The Pink & White
              Initiative is committed to tackling health illiteracy and
              inadequate access to healthcare.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
              Mission
            </div>
            <h3 className="text-2xl font-bold">Empowering Through Education</h3>
            <p className="text-gray-500 md:text-lg">
              We empower communities by addressing public health challenges and
              reducing health illiteracy across all ages and genders. Through
              essential health education, resources, and community-based
              programs, we strive to create healthier, informed populations.
            </p>
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
              Vision
            </div>
            <h3 className="text-2xl font-bold">A Healthier Future</h3>
            <p className="text-gray-500 md:text-lg">
              We envision a world where every individual—regardless of age or
              gender—has access to accurate health information, essential
              resources, and the opportunity to lead a dignified and healthy
              life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border-t p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
              <Users className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold">Inclusive Approach</h3>
            <p className="text-center text-gray-500">
              Serving individuals across different life stages, ensuring
              everyone has resources to lead a healthy life.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-t p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
              <BookOpen className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold">Health Education</h3>
            <p className="text-center text-gray-500">
              Providing essential knowledge on hygiene, nutrition, disease
              prevention, and reproductive health.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-t p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold">Community Support</h3>
            <p className="text-center text-gray-500">
              Building networks of support through pad banks, mobile clinics,
              and educational workshops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
