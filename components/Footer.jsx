import React from "react";
import Link from "next/link";
import { CgCopyright } from "react-icons/cg";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import {} from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-1 w-full justify-center p-2 text-white mt-auto text-lg footer">
      <div className="socials flex items-center gap-3">
        <Link href="#" target="_blank">
          <FaFacebook />
        </Link>
        <Link href="#" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="#" target="_blank">
          <FaTwitter />
        </Link>
      </div>

      <div>
        <small className="flex items-center gap-0">
          <CgCopyright size={15} />
          2023 by blockboi
        </small>
      </div>

      <div className="built">
        Built by{" "}
        <Link
          href="https://ayoola-dev.netlify.app"
          target="_blank"
          noreferrer="true"
          className="underline hover:no-underline"
        >
          Ayoola
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
