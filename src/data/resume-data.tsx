import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jacob Brown",
  initials: "JB",
  location: "Brighton, UK",
  locationLink: "https://www.google.com/maps/place/Brighton",
  about:
    "A full stack software engineer with three years experience developing production-level code",
  summary:
    "Comfortable with all aspects of software development: from the initial planning stages outlining specifications with clients, to creating test suites and writing documentation. Whilst my experience primarily lies in .NET applications, I frequently undertake projects involving unfamiliar tech stacks. I am adept at learning and adapting to the new skills required.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/87342120?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "jacobgeorgebrown26@gmail.com",
    tel: "+447482916862",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jacobgeorge26/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jacobgeorgebrown/",
        icon: LinkedInIcon,
      }
    ],
  },
  work: [
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Hybrid"],
      title: "Junior → Intermediate Software Engineer",
      start: "June 2022",
      end: "Present",
      description:
        "The Release Engineering team is responsible for developing tools to serve both internal and external users. After taking lead on several projects I was promoted within the team.",
      highlights: [
        "Created a .NET middleware service to transfer data between Discourse and Jira, using Google Cloud Pub/Sub to receive webhooks from each.",
        "Decommissioned a legacy internal bug tracking system. I coordinated with stakeholders to identify the future needs for the data then developed a background service to idempotently migrate it into BigQuery. Associated attachments were transferred into GCP buckets and a RESTful API was created to serve them.  An nginx server was established to redirect the legacy URLs.",
        "Created a No-SQL database of JSON files to store data in a GitHub repo, alongside Cue Blox data validation. Docusaurus was used to serve a static site and a GraphQL API.",
        "Collaborated with my team to publish a Unity package, enabling users to isolate their bug into a repro project to submit alongside their bug report.",
        "Converted a CI/CD pipeline from shell scripts into GitHub Actions and Nuke.",
        "Mentored our 2022/23 intern and organised a test workshop with the wider team to improve our code coverage."
      ]
    },
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Remote"],
      title: "Release Management Intern",
      start: "July 2020",
      end: "June 2021",
      description:
        "Throughout my internship, I was supported by a network of mentors helping develop both my technical and interpersonal skills.",
      highlights: [
        "Created an ASP.NET web app for an internal team. Entity Framework and CloudSQL were used for the backend, Blazor for the frontend.",
        "Identified pain points in the manual release processes, and created scripts to streamline them.",
        "Co-ordinated with teams across the entire company to identify and remove blockers to their upcoming releases",
        "Organised a book club for my intern cohort to discuss books covering DEI topics. I also established a 'Bring Another Intern To Work' initiative for us to gain insights into each other's roles."
      ]
    },
    {
      company: "Robogals Sussex",
      link: "https://robogals.org/",
      badges: ["In Person"],
      title: "Co-president",
      start: "September 2018",
      end: "July 2020",
      description:
        "Robogals aims to reduce the gender gap in STEM. I worked with girls aged 7-16, providing robotics activities and talks from women working in STEM fields.",
      highlights: [
        "Maintained partnerships with local schools and organisations.",
        "Organised and ran events with groups of 10-30 girls.",
        "Created new activities for upcoming workshops (e.g. RoboWars).",
        "Trained volunteers, ensured safeguarding requirements were met, and attended the annual SINE conference."
      ]
    }
  ],
  education: [
    {
      school: "University of Sussex",
      degree: "2:1 BSc Computer Science with Artificial Intelligence",
      start: "2018",
      end: "2022",
    },
  ],
  confidentSkills: [
    "C#",
    ".NET 7",
    "ASP.NET",
    "REST APIs",
    "Pub/Sub",
    "Relational databases",
    "No-SQL databases",
    "Docker",
    "Blazor",
    "Entity Framework",
    "CI/CD",
    "Cue Blox",
    "TDD",
    "Nuke",
    "GCP",
    "GitHub Actions",
    "Git"
  ],
  familiarSkills: [
    "Kubernetes",
    "Javascript",
    "Python",
    "Unity",
    "Shell scripts",
    "GraphQL APIs",
    "RabbitMQ"
  ],
  projects: [
    {
      title: "tgifelse",
      techStack: [
        "C#"
      ],
      description: "Assorted coding, logic and mathematical challenges of varying difficulties",
      link: {
        label: "tgifelse",
        href: "https://github.com/jacobgeorge26/tgifelse",
      },
    },
    {
      title: "Cocktail Generator",
      techStack: [
        ".NET",
        "Blazor",
        "Entity Framework"
      ],
      description: "Website using OpenAI to generate cocktail recipes",
      link: {
        label: "cocktail-generator",
        href: "https://github.com/jacobgeorge26/cocktail-generator",
      },
    },
    {
      title: "Lizardbot",
      techStack: [
        "Dissertation project",
        "C#",
        "Unity"
      ],
      description: "Optimise a lizard-inspired solution for robots traversing irregular environments",
      link: {
        label: "lizardbot",
        href: "https://github.com/jacobgeorge26/lizardbot",
      },
    }
  ],
} as const;
