import Link from "next/link";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Linkedin",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 bg-emerald-300/30 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                className="inline-flex items-center gap-1.5"
                key={link.title}
                href={link.href}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
