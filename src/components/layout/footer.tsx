import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:flex-row md:gap-8 lg:px-8">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold">The Pink & White Initiative</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>© 2024 The Pink & White Initiative. All rights reserved.</p>
      </div>
    </footer>
  );
}
