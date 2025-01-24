import Link from "next/link";

export const Header = () => {
  return <div className="flex justify-center items-center fixed z-[500] top-3 left-0 right-0 bg-gray-900 max-w-[320px] mx-auto rounded-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full">
      <Link className="nav-item" href='/'>Home</Link>
      <Link className="nav-item" href=''>Projects</Link>
      <Link className="nav-item" href=''>About</Link>
      <Link className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href=''>Contact</Link>
    </nav>
  </div>;
};
