import SelfButton from "@/ui/button/button";
import HeroMainPage from "@/ui/hero-main";
import VerticalImageSlider from "@/ui/image/vertical/vertical-slider";
import NavSection from "@/ui/nav/nav-section";
import { FaReact } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

export default function Home() {
  const images = [
    "/vehicles/atat.webp",
    "/planets/aleen_minor.webp",
    "/species_big/chagrian.webp",
    "/starships/ywing.webp",
    "/planets/nal_hutta.webp",
    "/characters/chewbacca.webp",
    "/species_big/yodas_species.webp",
    "/characters/ayla_secura.webp",
    "/species_big/pauan.webp",
  ];

  const images2 = [
    "/starships/rebel_transport.webp",
    "/planets/chandrila.webp",
    "/species_big/chagrian.webp",
    "/starships/naboo_royal_starship.webp",
    "/species_big/clawdite.webp",
    "/planets/mon_cala.webp",
    "/species_big/muun.webp",
    "/starships/droid_control_ship.webp",
    "/starships/aa9_coruscant_freighter.webp",
    "/characters/darth_maul.webp",
    "/vehicles/storm_iv_twinpod_cloud_car.webp",
  ];
  const images3 = [
    "/species_big/kaminoan.webp",
    "/planets/bestine_iv.webp",
    "/species_big/toong.webp",
    "/species_big/aleena.webp",
    "/vehicles/atst.webp",
    "/planets/utapau.webp",
    "/characters/anakin_skywalker.webp",
    "/vehicles/tieln_starfighter.webp",
    "/characters/darth_vader.webp",
  ];

  return (
    <div className="grid grid-cols-1 grid-rows-1 px-3 lg:grid-cols-3 lg:grid-rows-2">
      <section className="col-span-1 flex h-[600px] flex-col lg:col-span-2">
        {/** Hero Content */}
        <div className="flex flex-col gap-5 py-3">
          <HeroMainPage />
          <SelfButton endpoint="/contact">Contact Me</SelfButton>
        </div>
        {/** Site Navigation */}
        <div className="lg:my-auto lg:mr-7">
          <NavSection />
        </div>
      </section>
      {/** Sliding Images */}
      <section className="hidden w-full gap-3 lg:col-span-1 lg:flex">
        <VerticalImageSlider images={images} direction="animate-slideDown" />
        <VerticalImageSlider images={images2} direction="animate-slideUp" />
        <VerticalImageSlider images={images3} direction="animate-slideDown" />
      </section>
      {/** Credits  */}
      <section className="col-span-1">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <CreditsCard title="Design Inspriation">
            <LinkLine link="https://nuron-nextjs.vercel.app/">
              Nuron Website
            </LinkLine>
            I didn’t want to get bogged down by the design of this site. My main
            goal is to practice coding and styling with CSS. I found a template
            and was inspired by this website. <br />I created all the components
            and styles myself by writing the code from scratch, avoiding any
            scraping.
          </CreditsCard>

          <CreditsCard title="Technology">
            <div className="flex gap-3 pb-3">
              <IconButton icon="react" link="https://react.dev/" />
              <IconButton icon="next" link="https://nextjs.org/" />
              <IconButton icon="tailwind" link="https://tailwindcss.com/" />
            </div>
            I built this site using NexJS and TailwindCSS. I used some basic
            libraries like clsx and react icons, but I mostly stuck to the
            basics. I wanted to learn the basics of coding with Nextjs and
            styling with pure TailwindCSS.
          </CreditsCard>

          <CreditsCard title="Content">
            <LinkLine link="https://swapi.py4e.com/">
              SWAPI - (The Star Wars API)
            </LinkLine>
            The textbase data comes from the gorgeous SWAPI API. So, all the
            content is provided by the API, and it might change over time if the
            API adds or removes anything from their database.
          </CreditsCard>

          <CreditsCard title="Images">
            <LinkLine link="https://starwars.fandom.com/">
              Wookieepedia Star Wars Fandom
            </LinkLine>
            <LinkLine link="https://swse.fandom.com/wiki/Star_Wars_Saga_Edition_Wikia">
              Star Wars Saga Edition Wiki
            </LinkLine>
            <LinkLine link="https://www.merchmates.co.uk/blog/fandom/best-star-wars-planets/">
              Best Starwars Planets
            </LinkLine>
            I use fandom sites for images to avoid copyright issues, but I may
            miss some credits. This non-commercial site follows fair use. Please
            contact me if any image needs removal.
          </CreditsCard>
        </div>
      </section>
    </div>
  );
}

function CreditsCard({ children, title }) {
  return (
    <div className="pb-3">
      <h2 className="pb-2 text-xl font-bold text-white">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function LinkLine({ children, link }) {
  return (
    <div className="block">
      <a href={link} target="_blank" className="text-sky-500 hover:text-white">
        {children}
      </a>
    </div>
  );
}
function IconButton({ icon, link = "" }) {
  const Icons = {
    react: FaReact,
    next: RiNextjsLine,
    tailwind: RiTailwindCssFill,
  };
  const IconTag = Icons[icon];
  return (
    <a href={link} target="_self" className="text-sky-400 hover:text-white">
      <IconTag className="size-8" />
    </a>
  );
}
