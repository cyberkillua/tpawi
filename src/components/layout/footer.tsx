import Link from "next/link";
import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:flex-row md:gap-8 lg:px-8">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold">The Pink & White Initiative</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          {/* <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link> */}
          {/* <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link> */}
          {/* <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Contact
          </Link> */}
        </nav>
        <div className="flex gap-4">
          <Link
            href="https://wa.me/2349066303344"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M16 2.933c-7.284 0-13.067 5.783-13.067 13.067 0 2.304.613 4.552 1.776 6.527L2.16 29.04a1.067 1.067 0 0 0 1.36 1.36l6.513-2.549A13.01 13.01 0 0 0 16 29.067c7.284 0 13.067-5.783 13.067-13.067S23.284 2.933 16 2.933zm0 23.734c-2.07 0-4.099-.552-5.857-1.595l-.418-.247-4.34 1.698 1.698-4.34-.247-.418A10.93 10.93 0 0 1 5.067 16c0-6.012 4.921-10.933 10.933-10.933S26.933 9.988 26.933 16 22.012 26.667 16 26.667zm5.13-7.13c-.28-.14-1.654-.817-1.91-.91-.256-.093-.443-.14-.63.14-.187.28-.72.91-.883 1.097-.163.187-.326.21-.606.07-.28-.14-1.183-.436-2.253-1.39-.833-.743-1.396-1.66-1.56-1.94-.163-.28-.017-.43.123-.57.127-.127.28-.326.42-.49.14-.163.187-.28.28-.467.093-.187.047-.35-.023-.49-.07-.14-.63-1.523-.863-2.09-.227-.547-.457-.473-.63-.48l-.53-.01c-.187 0-.49.07-.747.35-.257.28-.98.957-.98 2.33 0 1.373 1.002 2.7 1.142 2.883.14.187 1.97 3.01 4.78 4.104.668.23 1.188.367 1.594.47.67.17 1.28.146 1.76.089.537-.064 1.654-.676 1.888-1.33.233-.653.233-1.213.163-1.33-.07-.117-.256-.187-.537-.327z" />
            </svg>
          </Link>
          <Link
            href="https://www.tiktok.com/@pinkwhiteinitiative?_t=ZM-8ugGVftZ7jB&_r=1"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 290"
              className="h-5 w-5"
            >
              <path
                fill="#FF004F"
                d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"
              />
              <path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z" />
              <path
                fill="#00F2EA"
                d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/pinkwhiteinitiative?igsh=MTluOW0ybmNpeG5oYw=="
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
              className="h-5 w-5"
            >
              <path
                fill="red"
                d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
              />
            </svg>
          </Link>

          <Link
            href="https://youtube.com/@thepinkandwhiteinitiative?si=XPSEEIljA7UUwhns"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <svg
              viewBox="0 0 256 180"
              width="256"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="h-5 w-5"
            >
              <path
                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                fill="red"
              />
              <path
                fill="#FFF"
                d="m102.421 128.06 66.328-38.418-66.328-38.418z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.twitter.com/tpawinitiative"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.085A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.45 4.45 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393c-.4.11-.822.17-1.258.17-.308 0-.603-.03-.893-.085a4.48 4.48 0 0 0 4.184 3.112A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>© 2025 The Pink & White Initiative. All rights reserved.</p>
      </div>
    </footer>
  );
}
