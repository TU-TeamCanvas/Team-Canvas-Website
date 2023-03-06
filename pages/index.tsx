import Footer from "../ui/components/Footer";
import Client from "../ui/sections/Client";
import Description from "../ui/sections/Description";
import Features from "../ui/sections/Features";
import Gallery from "../ui/sections/Gallery";
import Hero from "../ui/sections/Hero";
import Lessons from "../ui/sections/Lessons";
import Problem from "../ui/sections/Problem";
import Team from "../ui/sections/Team";
import Tech from "../ui/sections/Tech";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Client />
      <Problem />
      <Description />
      <Features />
      <Gallery />
      <Tech />
      <Lessons />
      <Footer />
    </>
  );
}
