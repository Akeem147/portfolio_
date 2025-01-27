import React from "react";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export default function SectionHeader({
  title,
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-tr from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
        {description}
      </p>
    </>
  );
}
