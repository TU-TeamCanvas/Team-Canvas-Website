import Client from "../ui/sections/Client";
import Hero from "../ui/sections/Hero";
import Lessons from "../ui/sections/Lessons";
import Problem from "../ui/sections/Problem";
import Project from "../ui/sections/Project";
import Team from "../ui/sections/Team";
import Tech from "../ui/sections/Tech";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Client />
      <Problem />
      <Project />
      <Tech />
      <Lessons />
    </>
  );
}
