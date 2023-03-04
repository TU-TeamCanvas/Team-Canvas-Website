import { Flex, Group, Text, Title, Image, Paper } from "@mantine/core";

export default function Feature({
  title,
  description,
  imageUrl,
  reversed,
}: {
  title: string;
  description: string;
  imageUrl: string;
  reversed: boolean;
}) {
  return (
    <Paper shadow="md" radius="xl" p="sm" m="md">
      <Flex direction={reversed ? "row-reverse" : "row"}>
        <Group sx={{ flex: 70 }}>
          <Title>{title}</Title>
          <Text fw={500}>{description}</Text>
        </Group>
        <Image src={imageUrl} alt="" w="20%" sx={{ flex: 30 }} />
      </Flex>
    </Paper>
  );
}
