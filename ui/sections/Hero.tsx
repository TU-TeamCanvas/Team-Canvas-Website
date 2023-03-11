import { Grid, Box, Title, Text, List, ThemeIcon, Button } from "@mantine/core";
import { IconCircleCheck, IconCurrencyDollar } from "@tabler/icons-react";
import { Link } from "react-scroll";

import Section from "../components/Section";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(canvasBG.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section id="Hero">
        <Grid columns={100} w="100%">
          <Grid.Col span={60}>
            <Title fz="80px" mt="100px">
              <Text
                variant="gradient"
                gradient={{ from: "primaryBlue", to: "primaryGreen", deg: 80 }}
              >
                Project Canvas
              </Text>
            </Title>

            <Text size="sm" mb="xl">
              The new interface for organising Product Backlog Items (PBIs) for
              software projects at MaibornWolff that address the issues with the
              currently used project management tool, Atlassian Jira.
            </Text>
            <List
              mt="50px"
              ml="70px"
              spacing="xs"
              size="xl"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck size="1rem" />
                </ThemeIcon>
              }
            >
              <List.Item fw={500}>
                Better organise, prioritise, and visualise PBIs.
              </List.Item>
              <List.Item fw={500}>
                More intuitive and flexible tool for managing software projects
              </List.Item>

              <List.Item
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCurrencyDollar size="1rem" />
                  </ThemeIcon>
                }
                fw={500}
              >
                Custom features and improved usability at a lower cost
              </List.Item>
            </List>
            <Button
              variant="gradient"
              gradient={{ from: "primaryBlue", to: "primaryGreen", deg: 105 }}
              radius="xl"
              ml="70px"
              mt="xl"
            >
              <Link activeClass="active" to="Description" spy smooth>
                View More
              </Link>
            </Button>
          </Grid.Col>
          <Grid.Col span={40} />
        </Grid>
      </Section>
    </Box>
  );
}
