import { Carousel } from "@mantine/carousel";
import { Avatar, Text, Paper, Group, ThemeIcon, Box } from "@mantine/core";
import {
  IconArchive,
  IconCircleCheckFilled,
  IconFlag2Filled,
  IconMessages,
  IconTargetArrow,
} from "@tabler/icons-react";

import Heading from "../components/Heading";
import Section from "../components/Section";

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
  icon: JSX.Element;
}

export function UserInfoAction({
  avatar,
  name,
  email,
  job,
  icon,
}: UserInfoActionProps) {
  return (
    <Paper radius="md" withBorder w={269}>
      <Avatar src={avatar} size={240} radius={120} mx="auto" mt="xl" />
      <Text ta="center" fz="lg" weight={500} mt="xl">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm" mb="md">
        {email}
      </Text>
      <Group
        sx={{
          justifyContent: "center",
          background: "linear-gradient(80deg, #00B0D7 0%, #07F520 100%);",
        }}
      >
        <ThemeIcon variant="outline" c="#FFFFFF">
          {icon}
        </ThemeIcon>
        <Text ta="center" color="#FFFFFF" fz="md">
          {job}
        </Text>
      </Group>
    </Paper>
  );
}
const teamMembers = [
  {
    avatar: "../../Team/Alex.png",
    name: "Alexander Hartmann",
    email: "example@gmail.com",
    job: "Quality Assurance",
    icon: <IconCircleCheckFilled />,
  },
  {
    avatar: "../../Team/Enrico.png",
    name: "Enrico Chies",
    email: "enrico.chies@stud.tu-darmstadt.de",
    job: "Communicator",
    icon: <IconMessages />,
  },
  {
    avatar: "../../Team/Ihsen.png",
    name: "Ihsen Bouallegue",
    email: "bouallegueihsen@gmail.com",
    job: "Team Leader",
    icon: <IconFlag2Filled />,
  },
  {
    avatar: "../../Team/Oussema.png",
    name: "Oussema Masmoudi",
    email: "gib.masmoudi@gmail.com",
    job: "Ressource Manager",
    icon: <IconArchive />,
  },

  {
    avatar: "../../Team/Christian.png",
    name: "Christian Huetter",
    email: "example@gmail.com",
    job: "Scrum Master",
    icon: <IconTargetArrow />,
  },
];
export default function Team() {
  return (
    <Section id="Team">
      <Box>
        <Heading>Team</Heading>
        <Carousel
          slideGap="xs"
          slideSize="25%"
          align="center"
          dragFree
          loop
          slidesToScroll={4}
        >
          {teamMembers.map((user) => (
            <Carousel.Slide key={user.name}>
              <UserInfoAction
                avatar={user.avatar}
                name={user.name}
                email={user.email}
                job={user.job}
                icon={user.icon}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Section>
  );
}
