import { Avatar, Text, Paper, Group } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
}

export function UserInfoAction({
  avatar,
  name,
  email,
  job,
}: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
      h="400px"
      w="500px"
    >
      <Avatar src={avatar} size={240} radius={120} mx="auto" mt="xl" />
      <Text ta="center" fz="lg" weight={500} mt="xl">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {email}
      </Text>
      <Text
        ta="center"
        variant="gradient"
        gradient={{ from: "primaryBlue", to: "primaryGreen", deg: 80 }}
        fz="sm"
      >
        {job}
      </Text>
    </Paper>
  );
}
const teamMembers = [
  {
    avatar: "../../Team/Alex.png",
    name: "Alexander Hartmann",
    email: "example@gmail.com",
    job: "Quality Assurance",
  },
  {
    avatar: "../../Team/Enrico.png",
    name: "Enrico",
    email: "example@gmail.com",
    job: "Communicator",
  },
  {
    avatar: "../../Team/Ihsen.png",
    name: "Ihsen Bouallegue",
    email: "example@gmail.com",
    job: "Team Leader",
  },
  {
    avatar: "../../Team/Oussema.png",
    name: "Oussema Masmoudi",
    email: "gib.masmoudi@gmail.com",
    job: "Ressource Manager",
  },

  {
    avatar: "../../Team/Christian.png",
    name: "Christian Huetter",
    email: "example@gmail.com",
    job: "Scrum Master",
  },
];
export default function Team() {
  return (
    <Section id="Team">
      <Heading>Team</Heading>
      <Group w="1400px" grow>
        {teamMembers.map((user) => (
          <UserInfoAction
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            job={user.job}
            key={user.name}
          />
        ))}
      </Group>
    </Section>
  );
}
