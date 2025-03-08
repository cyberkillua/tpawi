import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering Communities Through Health Education
            </h1>
            <p className="text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              The Pink & White Initiative addresses public health challenges and
              reduces health illiteracy across all ages and genders, with a
              special focus on vulnerable groups.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Our Programs
              </Button>
              <Button
                variant="outline"
                className="border-pink-200 text-pink-500 hover:bg-pink-50"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:order-last">
            <img
              src="/placeholder.svg?height=550&width=700"
              alt="Community health education session"
              className="mx-auto aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
              style={{ maxWidth: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
