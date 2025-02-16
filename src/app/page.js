import VerticalImageSlider from "@/ui/image/vertical/vertical-slider";

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
    <div className="grid grid-cols-2">
      <section>hero</section>
      <section>
        <div className="flex gap-3">
          <VerticalImageSlider images={images} direction="slideDown" />
          <VerticalImageSlider images={images2} direction="slideUp" />
          <VerticalImageSlider images={images3} direction="slideDown" />
        </div>
      </section>
    </div>
  );
}
