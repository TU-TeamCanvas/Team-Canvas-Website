import { Flex, Text, Title, Image, Paper, Stack } from "@mantine/core";

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
    <Paper shadow="md" radius="xl" p="lg" m="xl">
      <Flex direction={reversed ? "row-reverse" : "row"}>
        <Stack sx={{ flex: 60 }}>
          <Title ml="xl" mr="xl" mt="lg" color="secondary.3">
            {title}
          </Title>
          <Text ml="xl" mr="xl" fw={500}>
            {description}
          </Text>
        </Stack>
        <Image
          src={imageUrl}
          alt=""
          height="300px"
          sx={{ flex: 40 }}
          fit="contain"
        />
      </Flex>
    </Paper>
  );
}
