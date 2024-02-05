import { ReactNode } from 'react';
import Link from 'next/link';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="">
        <nav className="">
          <ul className="">
            <li className="">
              <Link className="" href="/">
                Home
              </Link>
            </li>

            <li className="">
              <Link className="" href="/signup">
                Signup
              </Link>
            </li>

            <li className="">
              <Link className="" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="">{children}</main>

      <footer className="flex flex-row flex-nowrap py-2 justify-between">
        <div>left</div>
        <div className="flex flex-row flex-nowrap">
          <div className="flex flex-col flex-nowrap">
            <h5 className="font-semibold mb-2">Product</h5>

            <Link className="mt-1" href="/pricing">
              Pricing
            </Link>

            <Link className="mt-1" href="/download">
              Download
            </Link>

            <Link className="mt-1" href="/roadmap">
              Roadmap
            </Link>
          </div>

          <div className="flex flex-col flex-nowrap">
            <h5 className="font-semibold mb-2">Developers</h5>

            <Link
              className="mt-1"
              href="https://github.com/williamstyronejr/oneapp/blob/main/CONTRIBUTING.md"
              target="_blank"
            >
              Contribute
            </Link>
          </div>

          <div className="flex flex-col flex-nowrap">
            <h5 className="font-semibold mb-2">Company</h5>

            <Link className="mt-1" href="/about">
              About Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
