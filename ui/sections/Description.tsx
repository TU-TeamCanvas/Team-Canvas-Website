/* eslint-disable react/no-unescaped-entities */
import { List, Stack, Text, Title } from "@mantine/core";

import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Description() {
  return (
    <Section id="Description">
      <Heading>Description</Heading>
      <Stack>
        <Title>Overview</Title>
        <Text>
          The aim of this project is to develop a new interface for organising
          Product Backlog Items (PBIs) for software projects at MaibornWolff. It
          is an open-source project although it is currently planned that only
          MaibornWolff will use it. Furthermore, MaibornWolff will continue to
          develop custom features for this software, after the project is
          finished.
        </Text>
        <Text>
          This interface will address the issues with the currently used project
          management tool, Atlassian Jira, by providing custom features and
          improved usability at a lower cost.
        </Text>
        <List ml="70px" spacing="md" center>
          <List.Item>
            The current project management tool, Atlassian Jira, has limitations
            in terms of usability and cost.
          </List.Item>
          <List.Item>
            These limitations make it difficult to prioritise and visualise
            PBIs, and lack flexibility in managing software projects.
          </List.Item>

          <List.Item>
            These issues affect the Scrum teams at MaibornWolff and their
            customers, potentially reducing productivity and satisfaction.
          </List.Item>
        </List>
        <Text>
          The new interface will be developed in the form of a desktop
          application that communicates with Jira using its API, allowing the
          data to remain on the customers' servers and avoiding compatibility
          and privacy issues. This will enable the Scrum team to better
          organise, prioritise, and visualise PBIs, and will provide a more
          intuitive and flexible tool for managing software projects in the
          current remote-first organisational strategy. In the end, making it
          possible to better serve the needs of the customer and deliver
          high-quality software products in a timely and cost-effective manner.
          Developing a new interface will also allow our client to avoid using
          other project management tools like Azure DevOps. This is important
          because MaibornWolffs customers already pay significant licensing fees
          to Atlassian Jira, and using another tool could raise compatibility
          and privacy issues. By keeping the data on the customers servers and
          using Jiras API, we can provide custom features without incurring
          additional costs or violating data protection laws, making it a more
          practical and feasible solution for MaibornWolff and its customers.
        </Text>
      </Stack>
    </Section>
  );
}
