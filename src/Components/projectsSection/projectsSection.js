import htr from "../../images/projects images/htr.svg";
import pd from "../../images/projects images/PD.svg";
import chat from "../../images/projects images/chat.svg";
import stock from "../../images/projects images/stock.svg";
import shop from "../../images/projects images/shop.svg";
import notes from "../../images/projects images/notes.svg";



export const projectsSection = {
  title: "Projects",
  projects: [
    {
      title: "Budget Tracker",
      intro:
        "Built a monthly budgeting tracker app with category-based income, savings & expense tracking, performed interactive dashboards with data visualization for financial insights using Streamlit, Python, and SQLite",
      image: htr,
      url: "https://github.com/ushakomati/monthly_budget_tracker",
    },
    {
      title: "Release Notes Analyzer",
      intro:
        "A web-based ML tool to analyze & visualize release notes using Python and Flask, providing insights into software release patterns and trends",
      image: notes,
      url: "https://github.com/ushakomati/webapp",
    },
    {
      title: "Log Analyzer",
      intro:
        "A real time log analyzer using ML to detect anomalies, leveraging Python, AWS S3, and OpenSearch for comprehensive log monitoring and anomaly detection",
      image: pd,
      url: "https://github.com/ushakomati",
    },
    {
      title: "Stock Management System",
      intro:
        "Real-time inventory tracking system app utilized by 20+ schools, built with Java and Angular for efficient inventory management",
      image: stock,
      url: "https://github.com/ushakomati",
    },
    {
      title: "E-commerce Application",
      intro:
        "Developed an end to end full-stack application with consumer/admin-level features, implemented role-based access control using Spring Boot, Angular, and MySQL",
      image: shop,
      url: "https://github.com/ushakomati",
    },
    {
      title: "Demographic Analysis",
      intro:
        "Demographic factors that might appear to affect customer engagement",
      image: stock,
      url: "https://github.com/ushakomati/dummy/",
    },

    {
      title: "Enquire Bot",
      intro:
        "Created an NLP-based enquiry chatbot using Python and GCP Dialogflow, improving user query efficiency and automating customer support",
      image: chat,
      url: "https://github.com/ushakomati",
    },

    {
      title: "Word Counter App Using Docker",
      intro:
        "Developed a web app that counts word frequency in text files, containerized with Docker for easy deployment and scalability",
      image: htr,
      url: "https://github.com/ushakomati/docker-python-wordcount-project",
    },
  ],
};

export default projectsSection;
