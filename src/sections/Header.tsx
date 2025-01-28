import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  
  return <div className="flex justify-center items-center fixed z-[500] top-3 left-0 right-0 bg-gray-900 max-w-[328px] mx-auto rounded-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full px-2">
      <Link className="nav-item" href='/'>Home</Link>
      <Link className="nav-item" href='#projects'>Projects</Link>
      <Link className="nav-item" href='#about'>About</Link>
      <Link className="nav-item" href='#contacts'>Contact</Link>
    </nav>
  </div>;
};
