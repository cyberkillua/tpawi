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
                <div className="grid gap-6">
                  <a
                    href="tel:09066303344"
                    className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">09066303344</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/2349066303344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-600">09066303344</p>
                    </div>
                  </a>
                  <a
                    href="mailto:pinkwhiteinitiative@gmail.com"
                    className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">
                        pinkwhiteinitiative@gmail.com
                      </p>
                    </div>
                  </a>
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
