import Feature from "../components/Feature";
import Heading from "../components/Heading";
import Section from "../components/Section";

export default function Project() {
  const url = "canvas_logo.svg";
  const features = [
    {
      title: "Login",
      description:
        "we support both Login Options for Jira Cloud and Jira Server . For Cloud we assure a safe connection with the JIRA Api and provide the Oauth2 service  ",
      imageUrl: "Login.png",
      reversed: false,
    },
    {
      title: "Project View",
      description:
        "you can see a list of the created Projects with the corresponding information to each project (Name, Key, Type, lead). It is possible to sort the projects by Project Name, Project Key, Project Type, Project Lead. Selecting a specific project redirects the user to the corresponding backlog view page (3.3.3. Backlog view (Project Canvas)) . A user can also create a new Project and search for a specific Project in the Search field.",
      imageUrl: "ProjectView.png",
      reversed: true,
    },
    {
      title: "Backlog View",
      description:
        "you see the Jira PBIs in the order in which they are displayed in Jira. To the right, you can see a list of the current or future sprints that Jira has. You can click on a PBI and see its details. The fields displayed in the backlog and detail views are configurable.  The PBIs can be assigned to the single sprints via Drag & Drop.",
      imageUrl: "BacklogView.png",
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
