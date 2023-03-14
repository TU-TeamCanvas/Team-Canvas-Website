/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  Container,
  createStyles,
  MantineProvider,
  ThemeIcon,
  Text,
  Center,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Lessons() {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top left",
      position: "relative",
      color: theme.black,
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
      overflow: "hidden",
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
      color: theme.black,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    button: {
      display: "block",
      marginTop: theme.spacing.md,

      [theme.fn.smallerThan("sm")]: {
        display: "block",
        width: "100%",
      },
    },
  }));

  const { classes } = useStyles();

  return (
    <Section id="Lessons">
      <Heading>Lessons</Heading>
      <MantineProvider inherit>
        <Container w="100%">
          <Accordion
            chevronPosition="right"
            chevronSize={50}
            variant="separated"
            multiple
            chevron={
              <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                <IconChevronDown size="1.05rem" stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Accordion.Item className={classes.item} value="requirements">
              <Accordion.Control>
                How to write clear Software Requirements Specification?
              </Accordion.Control>
              <Accordion.Panel>
                After experiecing a real life example of misunderstanding with
                our client we learned that clear, concise, and executable
                requirements help development teams build high quality products
                that do what they are supposed to do. So we changed our process
                into giving more time and effort to discuss our clients
                requirement and defining acceptance criteria to avoid any form
                of misunderstanding.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="communication">
              <Accordion.Control>
                How to communicate and share with your team members for better
                team work?
              </Accordion.Control>
              <Accordion.Panel>
                We learned that effective communication between team members is
                critical to the success of any software engineering project.
                That's why our team ensured that we regularly communicate with
                each other and that everyone is aware of his responsibilities.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="feedback">
              <Accordion.Control>
                How to be open to feedback and learn from mistakes?
              </Accordion.Control>
              <Accordion.Panel>
                After reviewing each others work we learned that Feedback can
                help us improve our work and identify areas where we need to
                focus our efforts on. Mistakes are inevitable in software
                engineering projects, that's why we invested time in reviews and
                feedback to ensure a better code quality for our client.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="time">
              <Accordion.Control>
                How to manage time during with the development process?
              </Accordion.Control>
              <Accordion.Panel>
                Time management is critical in software engineering projects
                because we had tight deadlines, complex tasks, and multiple team
                members working on different parts of the project. Effective
                time management helped us ensure that we complete our work on
                time and that our work is of high quality. This process involves
                setting clear goals and priorities, breaking down tasks into
                manageable pieces, estimating the time required for each task,
                and allocating time accordingly.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="fun">
              <Accordion.Control>
                How to have fun along with the project process?
              </Accordion.Control>
              <Accordion.Panel>
                Although our project seemed to be challenging and required a
                significant amount of time and effort, we felt that it can also
                be exciting and enjoyable when we approached it with the right
                mindset. Having fun helped us stay motivated and engaged with
                the project, allowing us to approach our work with a positive
                attitude.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Center>
            <Text mt={50} c="white">
              Bonus easter egg 2: "You go to war with the army you get, not the
              army you want!"
            </Text>
          </Center>
        </Container>
      </MantineProvider>
    </Section>
  );
}
