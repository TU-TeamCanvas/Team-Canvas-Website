import {
  createStyles,
  Group,
  Image,
  Paper,
  Text,
  Header,
  Container,
  Burger,
  Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-scroll";

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "100rem",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(2)} ${rem(8)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

const links = [
  { link: "Home", label: "Hero" },
  { link: "Team", label: "Team" },
  { link: "Client", label: "Client" },
  { link: "Problem", label: "Problem" },
  { link: "Description", label: "Description" },
  { link: "Features", label: "Features" },
  { link: "Gallery", label: "Gallery" },
  { link: "Tech", label: "Tech" },
  { link: "Lessons", label: "Lessons" },
];
export function HeaderMiddle() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      activeClass="active"
      to={link.label}
      spy
      smooth
      key={link.label}
      className={cx(classes.link)}
    >
      <Text
        fz="20px"
        sx={{ ":hover": { textDecoration: "underline", cursor: "pointer" } }}
        onClick={(event) => {
          event.preventDefault();
          close();
        }}
      >
        {link.link}
      </Text>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} pos="fixed">
      <Container className={classes.header}>
        <Image
          src="canvas_logo_icon.svg"
          alt=""
          height="100px"
          width="100px"
          ml="lg"
        />
        <Group spacing={2} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper withBorder style={styles} className={classes.dropdown}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
