import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold">The Pink & White Initiative</span>
        </div>
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
        <Button className="bg-pink-500 hover:bg-pink-600">Donate Now</Button>
      </div>
    </header>
  );
}
