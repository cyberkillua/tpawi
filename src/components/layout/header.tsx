"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { DonationModal } from "@/components/donation-modal";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [donationModalOpen, setDonationModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold">
              The Pink & White Initiative
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Programs
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Events
            </Link>
            <Link
              href="#get-involved"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Get Involved
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="flex items-center gap-2">
            <Button
              className="bg-pink-500 hover:bg-pink-600"
              onClick={() => setDonationModalOpen(true)}
            >
              Donate Now
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="mt-8 flex flex-col gap-6">
                  <Link href="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="#about" className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="#programs" className="text-lg font-medium">
                    Programs
                  </Link>
                  <Link href="#events" className="text-lg font-medium">
                    Events
                  </Link>
                  <Link href="#get-involved" className="text-lg font-medium">
                    Get Involved
                  </Link>
                  <Link href="#contact" className="text-lg font-medium">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Donation Modal */}
      <DonationModal
        open={donationModalOpen}
        onOpenChange={setDonationModalOpen}
      />
    </>
  );
}
