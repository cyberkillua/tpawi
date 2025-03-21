"use client";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";

export function GetInvolvedSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = "Get Involved Inquiry";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:pinkwhiteinitiative@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="get-involved"
      className="w-full bg-pink-500 py-12 text-white md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Involved
            </h2>
            <p className="md:text-xl">
              Join us in our mission to improve health literacy and well-being
              across communities. There are many ways to contribute to our
              cause.
            </p>
            <div className="space-y-4">
              <InvolvementStep
                number={1}
                text="Donate to support our programs"
              />
              <InvolvementStep
                number={2}
                text="Volunteer your time and skills"
              />
              <InvolvementStep
                number={3}
                text="Partner with us as an organization"
              />
              <InvolvementStep
                number={4}
                text="Spread awareness about our cause"
              />
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 text-gray-900">
            <h3 className="mb-4 text-2xl font-bold text-pink-500">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-500 text-white hover:bg-pink-600"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InvolvementStepProps {
  number: number;
  text: string;
}

function InvolvementStep({ number, text }: InvolvementStepProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-pink-500">
        {number}
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
}
