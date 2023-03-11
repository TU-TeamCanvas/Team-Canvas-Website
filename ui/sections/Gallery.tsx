import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Gallery() {
  return (
    <Section id="Gallery">
      <Heading>Gallery</Heading>
      <Carousel
        withIndicators
        w="100%"
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <Image
            src="https://github.com/TU-TeamCanvas/Team-Canvas-Website/blob/main/public/Photos/photo1.jpg"
            alt=""
            w="20%"
            sx={{ flex: 40 }}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="project_canvas_logo.svg"
            alt=""
            w="20%"
            sx={{ flex: 40 }}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="project_canvas_logo.svg"
            alt=""
            w="20%"
            sx={{ flex: 40 }}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="project_canvas_logo.svg"
            alt=""
            w="20%"
            sx={{ flex: 40 }}
          />
        </Carousel.Slide>

        <Carousel.Slide>
          <Image
            src="project_canvas_logo.svg"
            alt=""
            w="20%"
            sx={{ flex: 40 }}
          />
        </Carousel.Slide>
      </Carousel>
    </Section>
  );
}
