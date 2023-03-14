import { Grid, Title, List, Text, Image, Card } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Problem() {
  return (
    <Section id="Problem">
      <Heading>Problem</Heading>
      <Grid columns={100} justify="space-between">
        <Grid.Col span={55}>
          <Title mb="xl"> JIRAs limitations in usability and cost</Title>
          <List withPadding size="xl" mb="xl">
            <List.Item>
              <Text mb="md" fz="lg">
                Lack of support for visual representation of PBIs where Jira
                does not provide the ability to represent PBIs in a way that is
                easy for team members to understand.
              </Text>
            </List.Item>
            <List.Item>
              <Text fz="lg">
                High cost for additional features because Jira adopts the
                Pay-per-use model. This means that depending on how many
                features are used or how often a particular feature is used, the
                cost can increase. Additionally, as a team grows and more users
                require the tools capabilities, the cost of additional user
                licenses will increase.
              </Text>
            </List.Item>
          </List>
        </Grid.Col>
        <Grid.Col span={40}>
          <Card shadow="xl" mb="xl">
            <Image src="cost.png" alt="Canvas logo" />
          </Card>
          <Card shadow="xl">
            <Image src="usabilityProblem.png" alt="Canvas logo" />
          </Card>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
