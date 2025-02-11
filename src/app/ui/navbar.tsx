"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
          alt="Flowbite React Logo"
          width={32}
          height={33}
          priority
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HM Consulting
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
