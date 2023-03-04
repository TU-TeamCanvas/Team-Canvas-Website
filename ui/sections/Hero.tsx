import { Grid, Image, Title, Text, List, Box } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(light-bulb-ideas-creative-diagram-concept.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section id="Hero">
        <Heading>Project Canvas</Heading>
        <Grid columns={100} w="100%">
          <Grid.Col span={70}>
            <Title
              variant="gradient"
              gradient={{ from: "cyan", to: "lime", deg: 10 }}
              mb="xl"
            >
              Introduction
            </Title>
            <List withPadding size="xl">
              <List.Item>
                <Text mb="md" fz="xl" fw={500}>
                  The aim of this project is to develop a new interface for
                  organising Product Backlog Items (PBIs) for software projects
                  at MaibornWolff.
                </Text>
              </List.Item>
              <List.Item>
                <Text fz="xl" fw={500}>
                  This interface will address the issues with the currently used
                  project management tool, Atlassian Jira, by providing custom
                  features and improved usability at a lower cost. This will
                  enable the Scrum team to better organise, prioritise, and
                  visualise PBIs.
                </Text>
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={30}>
            <Image src="project_canvas_logo.svg" alt="Canvas logo" />
          </Grid.Col>
        </Grid>
      </Section>
    </Box>
  );
}
