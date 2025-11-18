import prudential from "../../images/companies images/prudential.png";
import epam from "../../images/companies images/epam.png";
import tcs from "../../images/companies images/tcs.png";
import coign from "../../images/companies images/coign.jpeg";


export const experienceInfo = {
  title: "Experience",
  companies: [
    {
      companyName: "Prudential Financial",
      image: prudential,
      jobtitle: "Senior Software Engineer",
      duration: "August 2023 – Present",
      descBullets: [
        "Built RESTful APIs acting as a proxy between third-party and internal APIs, enhancing response times by 25%",
        "Architected 6+ microservices to integrate with enterprise platforms (APIGEE, Azure Entra, ForgeRock, Kong) for seamless data flow across systems",
        "Optimized API SLAs from 16s to 0.2s and 5.1s to 2s, enhancing system efficiency and user experience",
        "Collaborated with cross-functional and business teams to design in Figma and develop a new developer portal with polished features, improving user experience and increasing developer engagement by 50%",
        "Leveraged AWS services including EC2, ECS, S3, DynamoDB, Secrets Manager, Parameter Store, CloudFormation, IAM, and OpenSearch to design scalable, secure, and high-performing applications",
        "Achieved 88% unit test coverage using JUnit, Mockito, ensuring high code quality & reducing production issues",
        "Automated AWS infrastructure with CloudFormation templates, streamlining reduced manual provisioning time",
        "Led discussions on migrating legacy application to new application, enhancing usability and maintainability"
      ],
    },
    {
      companyName: "EPAM Systems",
      image: epam,
      jobtitle: "Software Development Engineer II",
      duration: "January 2020 – July 2022",
      descBullets: [
        "Managed client onboarding process for a banking application utilized by a top financial organization",
        "Developed and maintained 50+ REST APIs leveraging CQRS microservices design pattern and batch processing tasks with cloud infrastructure",
        "Identified and redesigned bulky APIs, whose response times revised by 90% (15-20s to 1-2s for 10+ APIs) by using AWS Lambda to Lambda invocation and removing unnecessary REST calls to method invocations",
        "Deployed AWS solutions using EC2, S3, EBS, ELB, auto scaling groups, Security groups, Cloud Formation, IAM",
        "Strategized with collaborative cross-functional teams and stakeholders to plan sprints, estimate user stories",
        "Addressed 40+ real time issues & client problems to deliver reliable solutions meeting business requirements",
        "Designed event driven notification mechanism with observability workflows, using Kafka, AWS SNS and SQS",
        "Spearheaded a team of software engineers & given technical guidance to 9 interns during their training phase",
        "Conducted 100+ design discussions and code reviews to ensure quality and governance compliance"
      ],
    },
    {
      companyName: "Tata Consultancy Services",
      image: tcs,
      jobtitle: "Software Development Engineer",
      duration: "April 2019 – January 2020",
      descBullets: [
        "Leveraged monitoring, debugging, troubleshooting and logging tools to enhance performance of existing APIs by 90% for banking applications",
        "Designed & developed software solutions using Java, Spring Framework, microservices architecture",
        "Maintained products adhering banking clients standards to ensure minimal impact on user experience"
      ],
    },
    {
      companyName: "COIGN Consultants Service",
      image: coign,
      jobtitle: "Software Intern",
      duration: "April 2017 – August 2017",
      descBullets: [
        "Developed a mobile application to help users find nearest ATMs, hospitals with estimated distance",
        "Implemented location-sharing functionality, allowing users to track the whereabouts of friends and family",
        "Integrated Google Maps API to provide real-time navigation and directions within the app"],
    },
  ],
};

export default experienceInfo;
