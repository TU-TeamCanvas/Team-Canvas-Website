import { Group, Image, Text } from "@mantine/core";
import { Link } from "react-scroll";

const links = [
  { link: "Home", label: "Hero" },
  { link: "Team", label: "Team" },
  { link: "Client", label: "Client" },
  { link: "Problem", label: "Problem" },
  { link: "Description", label: "Description" },
  { link: "Features", label: "Features" },
  { link: "Gallery", label: "Gallery" },
  { link: "Techs", label: "Tech" },
  { link: "Lessons", label: "Lessons" },
];
export function HeaderMiddle() {
  const items = links.map((link) => (
    <Link activeClass="active" to={link.label} spy smooth key={link.label}>
      <Text
        fz="30px"
        sx={{ ":hover": { textDecoration: "underline", cursor: "pointer" } }}
        onClick={() => {}}
      >
        {link.link}
      </Text>
    </Link>
  ));

  return (
    <Group
      h={80}
      sx={{
        position: "fixed",
        background: "linear-gradient(180deg, #D3D3D3 20%, white 100%)",
        zIndex: 10,
      }}
      w="100%"
    >
      <Image
        src="canvas_logo_icon.svg"
        alt=""
        height="70px"
        width="70px"
        mr="70px"
        ml="50px"
      />

      <Group spacing={30} sx={{ justifyContent: "center" }}>
        {items}
      </Group>
    </Group>
  );
}
