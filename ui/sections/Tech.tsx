import {
  Container,
  SimpleGrid,
  Stack,
  px,
  useMantineTheme,
  Text,
  Image,
  Paper,
} from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Tech() {
  const getChild = (
    height: number,
    technologyLogo: string,
    technologyName: string
  ) => (
    <Paper
      h={height}
      radius="md"
      bg={theme.colors.gray[2]}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
          transition: "background-color .35s ease",
          background: "linear-gradient(80deg, #00B0D7 0%, #07F520 100%)",
          cursor: "pointer",
        },
      }}
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
          {getChild(BASE_HEIGHT, "reactLogo.png", "React")}
          <Stack>
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              "typeScriptLogo.png",
              "TypeScript"
            )}
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              "ElectronLogo.png",
              "Electron"
            )}
          </Stack>
          <Stack>
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "MantineLogo.png",
              "Mantine"
            )}
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "FastifyLogo.png",
              "Fastify"
            )}
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "PlaywrightLogo.png",
              "Playwright"
            )}
          </Stack>
          {getChild(BASE_HEIGHT, "yarnLogo.png", "Yarn")}
        </SimpleGrid>
      </Container>
    </Section>
  );
}
