import Feature from "../components/Feature";
import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Project() {
  const features = [
    {
      title: "Login",
      description:
        "We support both Login Options for Jira Cloud and Jira Server . For Jira Cloud users we assure a safe connection with the JIRA Api and provide the Oauth2 service.For Jira Server we provide an authentification using the URL of the server the usrname and the password",
      imageUrl: "Login.png",
      reversed: false,
    },
    {
      title: "Project View",
      description:
        "In Project View we present list of the created Projects with the corresponding information to each project. It is possible to sort the projects by  Name,  Key. Selecting a specific project redirects the user to the corresponding backlog view page  . A user can also create a new Project and search for a specific Project in the Search field.",
      imageUrl: "ProjectView.png",
      reversed: true,
    },
    {
      title: "Backlog View",
      description:
        "the Jira PBIs are displayed in the order in which they are displayed in Jira. To the right, you can see a list of the current or future sprints that Jira has. You can click on a PBI and see its details. The fields displayed in the backlog and detail views are configurable.  The PBIs can be assigned to the single sprints via Drag & Drop.",
      imageUrl: "BacklogView.png",
      reversed: false,
    },
    {
      title: "Hill Chart",
      description:
        "It would be nice to be able to say more precisely how far the excution of an issue has progressed. Such an overview is particularly useful for long-term PBIs (three days or more) in order to be able to identify difficult tickets more quickly. For this, we want to use a hill chart where we can use drag and drop to visualise whether we are still “climbing the mountain” or whether we already know how to implement everything and we “just have to roll down the hill",
      imageUrl: "HilChart.png",
      reversed: true,
    },
    {
      title: "Story Map",
      description:
        "a story map shows us which step in the user workflow a PBI improves and when he will do this PBI (sprint or release). There is technical context for the purpose of a PBI and a roadmap of when it will be done",
      imageUrl: "StoryMap.png",
      reversed: false,
    },
  ];
  return (
    <Section id="Project">
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
