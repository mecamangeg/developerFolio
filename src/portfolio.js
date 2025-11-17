/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Michael Camangeg",
  title: "Hi all, I'm Michael",
  subTitle: emoji(
    "A Lawyer by profession with a passion for solving complex problems through code ⚖️💻 I bridge the gap between legal expertise and technology to build innovative CRM systems, web applications, and desktop solutions using Next.js / tRPC / Prisma and the T3 Stack."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mecamangeg",
  linkedin: "https://www.linkedin.com/in/mecamangeg/",
  gmail: "michaeluspay@gmail.com",
  gitlab: "",
  facebook: "https://web.facebook.com/mecamangeg/",
  medium: "",
  stackoverflow: "",
  twitter: "https://twitter.com/mecamangeg",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "LAWYER & FULL STACK DEVELOPER BUILDING SOLUTIONS THAT MATTER",
  skills: [
    emoji(
      "⚡ Build custom CRM systems tailored to client business needs"
    ),
    emoji("⚡ Develop web applications and Electron desktop solutions"),
    emoji(
      "⚡ Create full-stack applications using the T3 Stack (Next.js, tRPC, Prisma)"
    ),
    emoji(
      "⚡ Apply legal expertise to understand and solve complex business problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Singapore - Lee Kuan Yew School of Public Policy",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Senior Executives Class",
      duration: "",
      desc: "Advanced leadership and public policy program for senior executives.",
      descBullets: []
    },
    {
      schoolName: "Development Academy of the Philippines",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Senior Executives Class",
      duration: "",
      desc: "Executive development program focused on governance and public administration.",
      descBullets: []
    },
    {
      schoolName: "University of La Salette",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Laws and Letters",
      duration: "",
      desc: "Completed law degree with focus on legal practice and jurisprudence.",
      descBullets: []
    },
    {
      schoolName: "St. Louis University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "BS Commerce Major in Marketing",
      duration: "",
      desc: "Foundation in business administration and marketing principles.",
      descBullets: []
    },
    {
      schoolName: "University of the Philippines - Information Technology Development Center",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "IT Development Program",
      duration: "",
      desc: "Professional development in information technology and software development.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Next.js / React", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "tRPC / API Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Prisma / Database",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lawyer & Full Stack Developer",
      company: "Independent Practice",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Present",
      desc: "Providing legal services while developing custom software solutions including CRM systems, web applications, and desktop solutions for clients.",
      descBullets: [
        "Building custom CRM and business management systems",
        "Developing web and Electron desktop applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "CUSTOM SOFTWARE SOLUTIONS I'VE BUILT FOR CLIENTS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Custom CRM System",
      projectDesc: "A tailored Customer Relationship Management system built with Next.js, tRPC, and Prisma to help businesses manage their client relationships effectively.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Business Management Web App",
      projectDesc: "Full-stack web application for streamlining business operations and workflow automation using the T3 Stack.",
      footerLink: []
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bar Exam Passer",
      subtitle:
        "Successfully passed the Philippine Bar Examination and licensed to practice law.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Bar Exam Logo",
      footerLink: []
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "michaeluspay@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mecamangeg", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
