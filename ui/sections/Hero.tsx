import { Grid, Box, Title, Text, List, ThemeIcon } from "@mantine/core";
import { IconCircleCheck, IconCurrencyDollar } from "@tabler/icons-react";

import Section from "../components/Section";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(scrum.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section id="Hero">
        <Grid columns={100} w="100%">
          <Grid.Col span={60}>
            <Title
              variant="gradient"
              gradient={{ from: "cyan", to: "lime", deg: 80 }}
              fz="80px"
              mt="100px"
            >
              Project Canvas
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
          </Grid.Col>
          <Grid.Col span={40} />
        </Grid>
      </Section>
    </Box>
  );
}
