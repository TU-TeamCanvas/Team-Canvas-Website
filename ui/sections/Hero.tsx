import {
  Grid,
  Title,
  Text,
  List,
  ThemeIcon,
  Button,
  BackgroundImage,
} from "@mantine/core";
import {
  IconChartDots3,
  IconCurrencyDollar,
  IconTimeline,
} from "@tabler/icons-react";
import { Link } from "react-scroll";

import Section from "../components/Section";

export default function Hero() {
  return (
    <BackgroundImage src="canvasBG.png">
      <Section id="Hero">
        <Grid columns={100}>
          <Grid.Col span={60}>
            <Title fz="80px" mt="100px">
              <Text
                variant="gradient"
                gradient={{
                  from: "primaryBlue",
                  to: "primaryGreen",
                  deg: 80,
                }}
              >
                Project Canvas
              </Text>
            </Title>

            <Text size="lg" mb="xl" mt="xl">
              A new interface for more efficient organization of Product Backlog
              Items (PBIs) in software projects at MaibornWolff, that addresses
              the issues with the currently used project management tool:
              Atlassian Jira.
            </Text>
            <List mt="50px" ml="70px" spacing="lg" size="xl" center>
              <List.Item
                fw={500}
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconChartDots3 size="1rem" />
                  </ThemeIcon>
                }
              >
                Better organise, prioritise, and visualise PBIs.
              </List.Item>
              <List.Item
                fw={500}
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconTimeline size="1rem" />
                  </ThemeIcon>
                }
              >
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
              size="lg"
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
        </Grid>
      </Section>
    </BackgroundImage>
  );
}
