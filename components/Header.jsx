import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="py-3 px-10 flex items-center text-xl header max-h-20">
      <Link href="/" className="w-1/5">
        <Image src="/images/logo.svg" width={300} height={300} alt="logo" style={{ height:'auto', width:'min-content'}}/>
      </Link>
      <nav className="flex items-center gap-8 ml-auto hover:text-slate-900">
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div className="flex items-center gap-8">
          <CgProfile size={30} style={{ color: "#1E3D58" }} />
          <Link href="/cart">
          <AiOutlineShoppingCart size={30} style={{ color: "#1E3D58" }} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
