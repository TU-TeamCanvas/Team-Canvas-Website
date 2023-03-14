import { Grid, Title, List, Text, Image, Button } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Client() {
  return (
    <Section id="Client">
      <Heading>Client</Heading>
      <Grid columns={100} w="90vw">
        <Grid.Col span={70} mt={69}>
          <Title color="primaryRed.4" mb="xl">
            MailbornWolff GmbH
          </Title>
          <List withPadding size="xl" mb="xl">
            <List.Item>
              <Text mb="md" fz="lg">
                MaibornWolff creates excellent, sophisticated and individual
                software solutions for customers and their users. Their
                specialists advise, code and test in comprehensive digitization
                projects.
              </Text>
            </List.Item>
            <List.Item>
              <Text fz="lg">
                As an IT service provider with over 30 years of tech experience,
                they take overall responsibility, complex issues and ambitious
                projects drive them. With their extensive know-how they strive
                to bring any project to fruition.
              </Text>
            </List.Item>
          </List>
          <Button
            color="primaryRed.4"
            radius="xl"
            size="xl"
            ml="xl"
            onClick={() => {
              window.open("https://www.maibornwolff.de/");
            }}
          >
            Visit Website
          </Button>
        </Grid.Col>
        <Grid.Col span={30}>
          <Image
            src="MW_LOGO_RGB_color_auf_weiss.svg"
            alt="Canvas logo"
            width="500px"
            height="500px"
            onClick={() => {
              window.open("https://www.maibornwolff.de/");
            }}
            style={{ cursor: "pointer" }}
          />
        </Grid.Col>
      </Grid>
    </Section>
  );
}
