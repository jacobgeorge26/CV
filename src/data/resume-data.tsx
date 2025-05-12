import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  isLocal: false,
  name: "Jacob Brown",
  initials: "JB",
  location: "Brighton, UK",
  locationLink: "https://www.google.com/maps/place/Brighton",
  about:
    "",
  summary: "A full stack software engineer with experience building new tools and maintaining legacy codebases. Whilst my experience primarily lies in .NET applications, I frequently undertake projects involving unfamiliar tech stacks.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/87342120?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "jacobgeorgebrown26@gmail.com",
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
      badges: [],
      title: "Software Engineer → Senior Software Engineer",
      start: "June 2022",
      end: "Present",
      description:
        "As a member of the Release Engineering Tools team, I help develop and maintain bug-related tools for both internal and external users. After taking ownership of several high-impact projects, I was promoted to a senior role in recognition of my contributions.",
      highlights: [
        "Rebuilt the Unity Bug Reporter from the ground up to avoid losing ARM support when Rosetta 2 is removed. This required building a custom configuration builder for backwards compatibility with legacy settings, and to customise the layering of settings sources.",
        "Managed a 3-phase delivery plan, coordinating with team members to track and prioritise tasks, while setting expectations for each phase with leadership.",
        "Created a .NET middleware service to transfer data between Discourse and Jira, implementing a RESTful API for integration with other internal tools.",
        "Decommissioned an internal bug tracking system by working with stakeholders to define future data needs, then developing a background service to idempotently migrate the data. An nginx server was established to redirect the legacy URLs.",
        "Modernised a CI/CD pipeline for better efficiency and maintainability, using GitHub Actions and Nuke.",
        "Hosted and actively participated in scrum ceremonies as part of our agile work practices.",
        "Provided mentorship to junior team members, supporting their growth by helping them set and achieve goals."
      ]
    },
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: [],
      title: "Release Management Intern",
      start: "July 2020",
      end: "June 2021",
      description:
        "Throughout my internship, I was supported by a network of mentors helping develop both my technical and interpersonal skills.",
      highlights: [
        "Developed an ASP.NET web app using Entity Framework and MySQL for backend data management, and Blazor for building the frontend.",
        "Coordinated with teams across the company to identify pain points in manual release processes, then created scripts to streamline them.",
        "Organised a book club for my intern cohort to discuss DEI topics and established a \"Bring Another Intern to Work\" initiative to gain insights into each other’s roles."
      ]
    },
    {
      company: "Robogals Sussex",
      link: "https://robogals.org/",
      badges: [],
      title: "Co-president",
      start: "September 2018",
      end: "July 2020",
      description:
        "Robogals works to reduce the gender gap in STEM. Our chapter worked with girls aged 7-16, hosting robotics activities and talks from women working in STEM fields.",
      highlights: [
        "Maintained partnerships with local schools and organisations.",
        "Organised and led events with groups of 10-30 girls.",
        "Developed new activities for upcoming workshops, such as RoboWars, to keep content fresh and engaging.",
        "Trained and supported volunteers, ensured safeguarding requirements were met, and attended the annual SINE conference."
      ]
    }
  ],
  education: [
    {
      school: "University of Sussex",
      degree: "2:1 BSc Computer Science with Artificial Intelligence",
      start: "",
      end: ""
    },
  ],
  skills: [
    "C#",
    ".NET",
    "REST APIs",
    "GraphQL APIs",

    "SQL",
    "MySQL",
    "CloudSQL",
//    "BigQuery",
    "Entity Framework",

    "Blazor",
    "Avalonia",

    "CI/CD",
    "TDD",
//    "Nuke Build",
//    "GitHub Actions",
//    "Git",

    "GCP",
    "Kubernetes",
    "Docker",

    "Pub/Sub",
    "RabbitMQ"
  ],
  interests:[
    "Bike mechanics",
    "Hiking",
    "Travel around Europe",
    "Cheese",
    "Bikeability instructor"
  ],
  projects: [
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
