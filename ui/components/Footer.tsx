import {
  Container,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      gap: "1.25em",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          height={48}
          width={148}
          fit="fill"
          alt="Team Canvas logo"
          src="/canvas_logo.svg"
        />
        <Stack spacing="xs">
          <Text align="center" size="sm">
            Made with love ❤️ by Team Canvas
          </Text>
          <Text align="center" color="dimmed" size="xs">
            © 2023 Team Canvas. All rights reserved.
          </Text>
        </Stack>
        <Group spacing={6} className={classes.links} position="right" noWrap>
          {/* <ActionIcon
            size="lg"
            component="a"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={24} stroke={1} />
          </ActionIcon> */}
        </Group>
      </Container>
    </div>
  );
}
