import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-0 z-0 w-full border-b-2 text-black">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">Qberg.</Link>
        <Image
          src="/hamburger-menu.svg"
          width={25}
          height={25}
          alt="hamburger menu"
          className="block md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
