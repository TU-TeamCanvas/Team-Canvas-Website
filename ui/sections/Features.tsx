import Feature from "../components/Feature";
import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Features() {
  const features = [
    {
      title: "Login",
      description:
        "We support Login Options for both Jira Cloud and Jira Server. For Jira Cloud users we provide the Oauth2 service thus assuring a safe connection with the JIRA Api. For Jira Server users we provide an authentication using the URL of the server, the username and the password.",
      imageUrl: "Login.png",
      reversed: false,
    },
    {
      title: "Project View",
      description:
        "In Project View we present a list of the created Projects with the corresponding informations to each project. It is possible to sort the projects by any field and search for a specific Project using the Search function. Selecting a specific project redirects the user to the corresponding backlog view page.",
      imageUrl: "ProjectView.png",
      reversed: true,
    },
    {
      title: "Backlog View",
      description:
        "In Backlog View the PBIs are displayed in the order in which they are displayed in Jira. To the right, you can see a list of the current or future sprints that Jira has. You can click on a PBI and see its details. The fields displayed in the backlog and detail views are editable. The PBIs can be assigned to the single sprints or to the backlog and their priority can be changed, all via Drag & Drop.",
      imageUrl: "BacklogView.png",
      reversed: false,
    },
    {
      title: "Hill Chart",
      description:
        "It would be nice to be able to intuitively and visually tell how far the excution of an issue has progressed. Such an overview is particularly useful for long-term PBIs (three days or more) in order to be able to identify difficult tickets more quickly. This is addressed in the Hill Chart feature, where we can use drag and drop to visualise whether we are still “climbing the mountain” or whether we already know how to implement everything and we “just have to roll down the hill",
      imageUrl: "HilChart.png",
      reversed: true,
    },
    {
      title: "Story Map",
      description:
        "The Story Map feature shows us which step in the user workflow a PBI improves and when this PBI will be done (sprint or release). There is technical context for the purpose of a PBI and a roadmap of when it will be done",
      imageUrl: "StoryMap.png",
      reversed: false,
    },
  ];
  return (
    <Section id="Features">
      <Heading>Features</Heading>
      {features.map((feature) => {
        return (
          <Feature
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            key={feature.title}
            reversed={feature.reversed}
          />
        );
      })}
    </Section>
  );
}
