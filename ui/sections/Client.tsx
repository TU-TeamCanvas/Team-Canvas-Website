import { Grid, Title, List, Text, Image, Button } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Client() {
  return (
    <Section id="Client">
      <Heading>Client</Heading>
      <Grid columns={100} w="100%">
        <Grid.Col span={70}>
          <Title
            variant="gradient"
            gradient={{ from: "pink", to: "red", deg: 100 }}
            mb="xl"
          >
            <a href="https://www.maibornwolff.de/">Mailborn Wolff</a>
          </Title>
          <List withPadding size="xl" mb="xl">
            <List.Item>
              <Text mb="md" fz="xl">
                MaibornWolff creates excellent, sophisticated and individual
                software solutions for customers and their users. Our
                specialists advise, code and test in comprehensive digitization
                projects.
              </Text>
            </List.Item>
            <List.Item>
              <Text fz="xl">
                As an IT service provider with over 30 years of tech experience,
                we take overall responsibility, complex issues and ambitious
                projects drive us. With our extensive know-how, we also get your
                project on the road:
              </Text>
            </List.Item>
          </List>
          <Button
            color="pink"
            radius="xl"
            ml="xl"
            onClick={() => {
              window.open("https://www.maibornwolff.de/");
            }}
          >
            Visit Website
          </Button>
        </Grid.Col>
        <Grid.Col span={30}>
          <Image src="MailbornWolffLogo.png" alt="Canvas logo" />
        </Grid.Col>
      </Grid>
    </Section>
  );
}
