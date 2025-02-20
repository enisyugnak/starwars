import HeroMainPage from "@/ui/hero-main";
import VerticalImageSlider from "@/ui/image/vertical/vertical-slider";
import NavSection from "@/ui/nav/nav-section";
import SectionHeader from "@/ui/section-header";

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
    <div className="grid grid-cols-1 grid-rows-2 justify-center px-3 md:grid-cols-3">
      <section className="col-span-1 flex h-fit flex-col md:col-span-2">
        {/** Hero Content */}
        <HeroMainPage />

        {/** Summary */}
        <div className="my-8">
          <div className="text-3xl">
            Its build with
            <span className="font-bold text-sky-400"> Nextjs</span>
            <br />
            styled with
            <span className="font-bold text-sky-400"> TailwindCSS</span>
            <br />
            and the dynamic content with
            <span className="font-bold text-sky-400"> SWAPI api</span>
          </div>
        </div>
        {/** Site Navigation */}
        <div className="md:mr-5">
          <NavSection />
        </div>
      </section>
      {/** Sliding Images */}
      <section className="hidden w-full gap-3 md:col-span-1 md:flex">
        <VerticalImageSlider images={images} direction="slideDown" />
        <VerticalImageSlider images={images2} direction="slideUp" />
        <VerticalImageSlider images={images3} direction="slideDown" />
      </section>
      {/** Credits  */}
      <section className="col-span-3 md:mt-12">
        <SectionHeader>Credits</SectionHeader>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="pb-3">
            <h2 className="text-md text-white">Design Inspriation</h2>
            <p>
              I did not want to think about design and beauty of this site as
              the primary aim is to learn coding and styling with css. I have
              found a template and inspired by this website. I have created all
              the components and styles by myself just to look at the site and
              write my codes from scracth avoiding any scrapping.
              <br />
              You may check the website
              <span className="ml-1">
                <a
                  href="https://nuron-nextjs.vercel.app/"
                  target="_blank"
                  className="text-sky-500 hover:text-white"
                >
                  Nuron Website
                </a>
              </span>
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-md text-white">Content</h2>
            <p>
              All the textbase data comes from beautiful SWAPI api. So all the
              content is provided by the api and it may change in time if the
              api adds or remove any content to their database.
              <br />
              For further information about the api you may
              <span className="ml-1">
                <a
                  href="https://swapi.py4e.com/"
                  target="_blank"
                  className="text-sky-500 hover:text-white"
                >
                  click here.
                </a>
              </span>
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-md text-white">Technology</h2>
            <p>
              I have created this site with NexJS and TailwindCSS. Although I
              have used some basic libraries such as clsx, and react icons, I
              tried to avoid using any animation or other heavy libraries as I
              intended to learn basics of coding with Nextjs and styling with
              pure TailwindCSS.
            </p>
          </div>
          <div className="pb-3">
            <h2 className="text-md text-white">Images</h2>
            <p>
              I have collected all the images around the web. Mostly I try to
              use fandom sites as the copyright would not be the issue. But some
              of the images I found while the developing progress and I may
              forget to credit. This is not a commercial site and never intended
              to violate any copyrights. I believe its a fair use to pracice. If
              any of the image seems to violate please contact me and I will
              remove it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
