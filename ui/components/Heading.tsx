import { Title } from "@mantine/core";

export default function Heading({ children }: { children: string }) {
  return (
    <Title
      sx={(theme) => ({
        [theme.fn.smallerThan("sm")]: {
          fontSize: "3em",
        },
      })}
      size="4em"
      align="center"
      mt="sm"
      mb="xl"
      color="secondary.2"
    >
      {children}
    </Title>
  );
}
