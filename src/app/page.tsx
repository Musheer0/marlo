import B2B from "@/_components/B2B";
import Features from "@/_components/features";
import GTM from "@/_components/GTM";
import Hero from "@/_components/hero";
import MARLOINACTION from "@/_components/marlo-in-action";
import Marquee from "@/_components/marquee";
import Image from "next/image";

export default function Home() {
  return (
<>
   <Hero/>
   <Marquee/>
   <Features/>
   <GTM/>
   <B2B/>
   <MARLOINACTION/>
</>
  );
}
