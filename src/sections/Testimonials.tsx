import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Sam Olawale",
    position: "CEO Digital SuperSystems",
    text: "As a marketing team, we needed a seamless experience that would appeal to our audience. Akeem’s front-end development was not only beautiful but also functional, allowing us to convert more visitors into customers. Highly recommend!",
    avatar: memojiAvatar1,
  },
  {
    name: "Ayana Norish",
    position: "Head of marketing @ Digital SuperSystems",
    text: "I couldn’t be happier with the results! As a designer, I value clean, user-friendly interfaces, and Akeem exceeded my expectations. He took my designs and brought them to life in a way I didn’t think was possible.",
    avatar: memojiAvatar2,
  },
  {
    name: "Alejandro Alvarez",
    position: "Industrial Designer @ DearDoc",
    text: "The user interface Akeem developed is incredibly intuitive. Our users have provided fantastic feedback about how easy it is to navigate the site. It’s clear that he understands what makes a great user experience.",
    avatar: memojiAvatar3,
  },
  {
    name: "Daria Hungate",
    position: "Director of Operations @ DearDoc",
    text: "Working with Akeem has been an absolute pleasure. His attention to detail and commitment to delivering top-quality work is unmatched. Our website is faster, more responsive, and looks amazing thanks to his expertise!",
    avatar: memojiAvatar4,
  },
  {
    name: "Ohale Ohamba",
    position: "CEO HaleTech Services",
    text: "From start to finish, the process was smooth and the communication with Akeem was excellent. He turned our vision into reality with a stunning, responsive site. The final product was delivered on time and is already boosting our online engagement.",
    avatar: memojiAvatar5,
  },
];

const title = "What Clients Say About Me";
const eyebrow = "Happy Clients";
const description =
  " Don't just take my word for it. See what my clients have to say about my work";

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-hidden [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)] py-4 -my-4">
          <div className="flex flex-none md:gap-6 gap-3 animate-move-left pr-8 [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    className="max-w-xs md:p-8 md:max-w-[450px] p-6 hover:-rotate-3 transition duration-300"
                    key={testimonial.name}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 flex-shrink-0 bg-gray-700 inline-flex rounded-full items-center justify-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
