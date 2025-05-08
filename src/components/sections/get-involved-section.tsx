"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GetInvolvedSection() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <section
      id="get-involved"
      className="w-full bg-pink-500 py-12 text-white md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Involved
            </h2>
            <p className="mx-auto max-w-3xl md:text-xl">
              Join us in our mission to improve health literacy and well-being
              across communities. There are many ways to contribute to our
              cause.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 space-y-4">
            <InvolvementStep number={1} text="Donate to support our programs" />
            <InvolvementStep number={2} text="Volunteer your time and skills" />
            <InvolvementStep
              number={3}
              text="Partner with us as an organization"
            />
            <InvolvementStep
              number={4}
              text="Spread awareness about our cause"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <Tabs
              defaultValue="contact"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 bg-pink-100">
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-white"
                >
                  Contact Us
                </TabsTrigger>
                <TabsTrigger
                  value="volunteer"
                  className="data-[state=active]:bg-white"
                >
                  Volunteer Signup
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contact" className="p-6 text-gray-900">
                <h3 className="mb-4 text-2xl font-bold text-pink-500">
                  Contact Us
                </h3>
                <div className="grid gap-4">
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
                    />
                  </div>
                  <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                    Send Message
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="volunteer" className="p-6 text-gray-900">
                <h3 className="mb-4 text-2xl font-bold text-pink-500">
                  Volunteer Signup
                </h3>
                <p className="mb-6 text-gray-600">
                  Thank you for your interest in volunteering with The Pink &
                  White Initiative. Please fill out the form below to join our
                  volunteer team.
                </p>

                {/* Google Form Embed */}
                <div className="h-[600px] w-full overflow-hidden rounded-md border border-gray-200">
                  <iframe
                    src="https://forms.gle/XEBadXaLn4qju6vo9"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Volunteer Signup Form"
                  >
                    Loading form...
                  </iframe>
                </div>

                <div className="mt-4 rounded-md bg-pink-50 p-4">
                  <p className="text-sm text-gray-600">
                    After submitting the form, our volunteer coordinator will
                    contact you within 3-5 business days to discuss next steps
                    and available opportunities.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
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
