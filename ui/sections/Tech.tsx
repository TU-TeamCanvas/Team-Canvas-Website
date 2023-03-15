/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  SimpleGrid,
  Stack,
  px,
  useMantineTheme,
  Text,
  Image,
  Paper,
  Center,
} from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Tech() {
  const getChild = (
    height: number,
    technologyLogo: string,
    technologyName: string,
    url: string
  ) => (
    <Paper
      h={height}
      radius="md"
      onClick={() => {
        window.open(url);
      }}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.gray[3],
        transition: "background .3s ease",
        ":hover": {
          background: theme.colors.primaryRed[2],
          cursor: "pointer",
        },
      })}
    >
      <Stack
        spacing="sm"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image
          src={technologyLogo}
          height="50px"
          width="50px"
          fit="contain"
          alt={technologyName}
        />
        <Text>{technologyName}</Text>
      </Stack>
    </Paper>
  );
  const BASE_HEIGHT = 360;
  const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children);
  const theme = useMantineTheme();

  return (
    <Section id="Tech">
      <Heading>Tech</Heading>
      <Container my="md" w="1000px">
        <SimpleGrid cols={4} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
          {getChild(
            BASE_HEIGHT,
            "reactLogo.png",
            "React",
            "https://reactjs.org/"
          )}
          <Stack>
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              "typeScriptLogo.png",
              "TypeScript",
              "https://www.typescriptlang.org/"
            )}
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              "ElectronLogo.png",
              "Electron",
              "https://www.electronjs.org/"
            )}
          </Stack>
          <Stack>
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "MantineLogo.png",
              "Mantine",
              "https://mantine.dev/"
            )}
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "FastifyLogo.png",
              "Fastify",
              "https://www.fastify.io/"
            )}
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "PlaywrightLogo.png",
              "Playwright",
              "https://playwright.dev/"
            )}
          </Stack>
          {getChild(
            BASE_HEIGHT,
            "yarnLogo.png",
            "Yarn",
            "https://yarnpkg.com/"
          )}
        </SimpleGrid>
        <Center>
          <Text mt={50} c="transparent" fz={10}>
            Bonus easter egg 1: "Il buongiorno si vede dal mattino!"
          </Text>
        </Center>
      </Container>
    </Section>
  );
}
