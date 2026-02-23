"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Users, Star, Award, ExternalLink, Check } from "lucide-react";
import Link from "next/link";

const MEMBERSHIP_FORM_URL = "https://forms.gle/RTzfri36EtSvHmxdA";

const membershipTiers = [
  {
    name: "Pink Pal",
    icon: Users,
    price: "\u20A62,000/mo or \u20A620,000/yr",
    description: "Entry-level membership with basic engagement perks",
    benefits: ["Entry-level membership with basic engagement perks."],
  },
  {
    name: "Pink Ally",
    icon: Star,
    price: "\u20A65,000/mo or \u20A650,000/yr",
    description: "Mid-tier membership",
    benefits: ["Intermediate membership with greater influence and access. "],
  },
  {
    name: "Pink Partner",
    icon: Crown,
    price: "\u20A610,000/mo or \u20A6100,000/yr",
    description: "Premium membership",
    benefits: ["Advanced membership contributing to strategy and outreach."],
  },
  {
    name: "Pink Advocate",
    icon: Award,
    price: "\u20A650,000/mo or \u20A6500,000/yr",
    description: "Highest tier membership",
    benefits: [
      "Premium membership with highest engagement, transparency, and advocacy opportunities.",
    ],
  },
];

export function GetInvolvedSection() {
  const [activeTab, setActiveTab] = useState("membership");

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
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <Tabs
              defaultValue="membership"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 bg-pink-100">
                <TabsTrigger
                  value="membership"
                  className="data-[state=active]:bg-white"
                >
                  Membership
                </TabsTrigger>
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
                  Volunteer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="membership" className="p-6 text-gray-900">
                <h3 className="mb-4 text-2xl font-bold text-pink-500">
                  Become a Member
                </h3>
                <p className="mb-6 text-gray-600">
                  Join The Pink & White Initiative as a member and support our
                  mission to improve health literacy. Choose the membership tier
                  that works best for you.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {membershipTiers.map((tier) => {
                    const IconComponent = tier.icon;
                    return (
                      <Card
                        key={tier.name}
                        className="relative overflow-hidden"
                      >
                        <CardHeader className="pb-3">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                              <IconComponent className="h-5 w-5 text-pink-500" />
                            </div>
                            <CardTitle className="text-lg">
                              {tier.name}
                            </CardTitle>
                          </div>
                          <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
                            {tier.price}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {tier.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Link
                    href={MEMBERSHIP_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Subscribe to a Membership Plan
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 rounded-md bg-pink-50 p-4">
                  <p className="text-sm text-gray-600">
                    Clicking the button above will open the membership
                    subscription form in a new tab. You can select your
                    preferred tier and complete your registration there.
                  </p>
                </div>
              </TabsContent>

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
                    src="https://8d85c339.sibforms.com/serve/MUIFAHs8bs0C3dIdS4zLFIZb-cPTXCO37zepExzD6crqha580Z6oXWbrgejYmgCXlt6snLOwdBFDdRo8-x4g_zK18iYP8XqCbZxi9nNCRbsSgTAAZR2ofZIGTOBKk6-v6XbnOa9PNMlwqvDdWK4MHSX95CQwOfjMIkvPwszAmrlhdou9e8rS87nyrhIkwgNj7CbDSPY85Xe313y8UA=="
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
