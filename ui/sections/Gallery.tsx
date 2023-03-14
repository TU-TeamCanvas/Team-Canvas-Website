import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Gallery() {
  const imageURls = [
    "../../Photos/photo1.jpg",
    "../../Photos/photo11.jpg",
    "../../Photos/photo2.jpg",
    "../../Photos/photo3.jpg",
    "../../Photos/photo4.jpg",
    "../../Photos/photo6.jpg",
    "../../Photos/photo7.jpg",
    "../../Photos/photo8.jpg",
    "../../Photos/photo9.jpg",
    "../../Photos/photo10.jpg",
  ];
  return (
    <Section id="Gallery">
      <Heading>Gallery</Heading>
      <Carousel
        withIndicators
        w="1200px"
        slideSize="50%"
        slideGap="sm"
        align="start"
        dragFree
        loop
      >
        {imageURls.map((url) => (
          <Carousel.Slide key={url}>
            <Image src={url} alt="" height="600px" width="600px" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Section>
  );
}
