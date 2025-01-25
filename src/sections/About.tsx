'use client'
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import GitHub from "@/assets/icons/github.svg";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: "Html5",
    iconType: Html,
  },
  {
    title: "CSS3",
    iconType: Css,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: React,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "NextJs",
    iconType: React,
  },
  {
    title: "Chrome DevTools",
    iconType: Chrome,
  },
  {
    title: "GitHub",
    iconType: GitHub,
  },
  {
    title: "Redux Toolkit",
    iconType: GitHub,
  },
];

const hobbies = [
  {
    title: "Cooking",
    emoji: "👨‍🍳",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "50%",
  },

  {
    title: "Football",
    emoji: "⚽",
    left: "5%",
    top: "72%",
  },

  {
    title: "Fitness",
    emoji: "💪",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "🎞️",
    left: "48%",
    top: "70%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "10%",
    top: "30%",
  },
  {
    title: "Reading",
    emoji: "📗",
    left: "55%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] col-span-3 lg:col-span-1 md:col-span-2">
              <CardHeader
                title="My reads"
                description="Explore the book shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies & tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyound the code"
              description="Explore my interest and hobbies beyond the digital realm."
              className="p-6"
            />

            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-tr from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
