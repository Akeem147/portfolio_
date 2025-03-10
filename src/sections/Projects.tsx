import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import newDashboard from "@/assets/images/new-dash.png";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Phlox",
    year: "2024",
    title: "Ecommerce",
    results: [
      { title: "Improved user experience" },
      { title: "Boosted site performance" },
      { title: "Enhanced mobile traffic" },
    ],
    link: "https://phlox-kohl.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    company: "CarePlus",
    year: "2024",
    title: "Patient Management System",
    results: [
      { title: "Streamlined appointment scheduling" },
      { title: "Expanded patient outreach" },
      { title: "Enhanced brand visibility" },
    ],
    link: "https://care-plus-five.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "BookIt",
    year: "2025",
    title: "Book a Meeting or Conference Room For Your Team",
    results: [
      { title: "Improved booking process" },
      { title: "Enhanced app performance" },
      { title: "Increased mobile engagement" },
    ],
    link: "https://book-it-olive.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Analytics Hub",
    year: "2025",
    title: "A Real Time Dashboard Analytics",
    results: [
      { title: "Optimized Data Visualization" },
      { title: "Real-Time Analytics Insights" },
      { title: "Streamlined User Engagement Metrics" },
    ],
    link: "https://dashboad-project.vercel.app/",
    image: newDashboard,
  },
];

const title = "";
const eyebrow = "Featured projects";
const description =
  "See how i transformed concepts into engaging digital experience";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 p-8 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid  lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center px-6 justify-center gap-2 mt-8">
                      <span>Visit live site</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
