import { Container } from "@mantine/core";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <Container
      id={id}
      size="lg"
      pt="4em"
      mih="100vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
}
