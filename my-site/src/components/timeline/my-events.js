import uvaCavaliers from "../../static/virginia-cavaliers.svg";
import uvaBci from "../../static/uva-bci.svg";
import awsBrand from "../../static/aws-brand.svg";
import costarBrand from "../../static/CSGP.svg";

export const events = {
  0: {
    startDate: "08-01-2019",
    endDate: "05-01-2023",
    title: "University of Virginia",
    subtitle: "School of Engineering and Applied Science",
    description: "Bachelor of Science in Computer Science;3.80 GPA;;Favorite classes:;CS 4720: Artificial Intelligence;CS 4102: Algorithms;ENTP 1010: Intro. to Entrepreneurship",
    image: uvaCavaliers,
  },
  1: {
    startDate: "08-01-2020",
    endDate: "05-01-2022",
    title: "Teaching Assistant",
    subtitle: "Software Development Methods in Java",
    description: "• Led groups of students through concepts in object-oriented programming and algorithms.;• Held weekly office hours to provide students feedback and methods for writing future-proof code.;• Participated in weekly meetings with other course staff on discussions about course improvements.",
    image: uvaCavaliers,
  },
  2: {
    startDate: "08-01-2021",
    endDate: "05-01-2023",
    title: "University of Virginia",
    subtitle: "School of Data Science",
    description: "Minor in Data Science;3.90 GPA;; Favorite class:;DS 3003: Communicating with Data",
    image: uvaCavaliers,
  },
  3: {
    startDate: "02-01-2022",
    endDate: "05-01-2022",
    title: "UG Research Assistant",
    subtitle: "UVA Biocomplexity Institute",
    description: "• Investigated tagging methods of clustered sets and algorithms for clustering method explainability.;• Formulated and optimized integer linear programs with Gurobi library in Python.",
    image: uvaBci,
  },
  4: {
    startDate: "05-01-2022",
    endDate: "08-01-2022",
    title: "SDE Intern",
    subtitle: "Amazon Web Services",
    description: "• Built and demonstrated a POC to quickly and safely source files in repositories located in lower security domains.;• Utilized Python and TypeScript to model and deploy AWS infrastructure.;• Architected solution leveraging S3, Lambda, and IAM services.;• Wrote XML schema definitions for generic customer-use cases.",
    image: awsBrand,
  },
  5: {
    startDate: "07-01-2023",
    title: "Software Engineer",
    subtitle: "CoStar Group",
    description: "• Building and improving microservices that facilitate CoStar Group's CRM platform.;;• FE: React in TypeScript + TailwindCSS;• BE: C#/.NET;• Data: SQL Server and Elastic",
    image: costarBrand,
  },
};