document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const skillBoxes = document.querySelectorAll('.hover-expand');
const skillsData = {
    languages: [
        { name: 'Java', img: 'img/java.png' },
        { name: 'Python', img: 'img/python.png' },
        { name: 'JavaScript', img: 'img/javascript.png' },
        { name: 'C++', img: 'img/cpp.png' },
        { name: 'C#', img: 'img/csharp.png' },
        { name: 'Go', img: 'img/go.png' },
        { name: 'Kotlin', img: 'img/kotlin.png' }
    ],
    frameworks: [
        { name: 'Spring Boot', img: 'img/springboot.png' },
        { name: 'Angular', img: 'img/angular.png' },
        { name: 'React', img: 'img/react.png' },
        { name: 'Node.js', img: 'img/nodejs.png' },
        { name: 'Vue.js', img: 'img/vuejs.png' },
        { name: 'Express.js', img: 'img/expressjs.png' },
        { name: '.NET', img: 'img/dotnet.png' }
    ],
    tools: [
        { name: 'AWS', img: 'img/aws.png' },
        { name: 'Azure', img: 'img/azure.png' },
        { name: 'Docker', img: 'img/docker.png' },
        { name: 'Kubernetes', img: 'img/kubernetes.png' },
        { name: 'Jenkins', img: 'img/jenkins.png' },
        { name: 'Git', img: 'img/git.png' },
        { name: 'Terraform', img: 'img/terraform.png' }
    ],
    databases: [
        { name: 'MySQL', img: 'img/mysql.png' },
        { name: 'PostgreSQL', img: 'img/postgresql.png' },
        { name: 'MongoDB', img: 'img/mongodb.png' },
        { name: 'DynamoDB', img: 'img/dynamodb.png' },
        { name: 'Cosmos DB', img: 'img/cosmosdb.png' },
        { name: 'Redis', img: 'img/redis.png' },
        { name: 'SQL Server', img: 'img/sqlserver.png' }
    ]
};

skillBoxes.forEach(box => {
    const category = box.getAttribute('data-category');
    const skillsList = box.querySelector('.skills-list');

    const initialSkills = skillsData[category].slice(0, 4);
    skillsList.innerHTML = initialSkills.map(skill => `<li><img src="${skill.img}" alt="${skill.name}"></li>`).join('');

    box.addEventListener('mouseenter', () => {
        skillsList.innerHTML = skillsData[category].map(skill => `<li><img src="${skill.img}" alt="${skill.name}"></li>`).join('');
    });

    box.addEventListener('mouseleave', () => {
        const initialSkills = skillsData[category].slice(0, 4);
        skillsList.innerHTML = initialSkills.map(skill => `<li><img src="${skill.img}" alt="${skill.name}"></li>`).join('');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const experienceItems = document.querySelectorAll(".experience-item");

    experienceItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
    });

    function showExperienceItems() {
        experienceItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
                item.style.transition = "all 0.5s ease-out";
            }
        });
    }

    window.addEventListener("scroll", showExperienceItems);
    showExperienceItems();
});
document.querySelectorAll(".experience-header").forEach((header, index) => {
    const images = ["prudential.png", "epam.png", "tcs.png", "coign.png"]; // Add respective images
    header.style.backgroundImage = `url('${images[index]}')`;
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "none";
});

const experienceDetails = {
    prudential: {
        banner: "prudential.png",
        content: `
            <h3>Senior Software Engineer - Prudential Financial</h3>
            <p>Architected 6+ microservices integrating with APIGEE, Azure Entra, ForgeRock, Kong.</p>
            <p>Optimized API performance, reducing SLAs from 16s to 0.2s.</p>
            <p>Implemented OAuth 2.0, JWT authentication & AWS Secrets Manager integration.</p>
            <p>Led API governance and microservices best practices workshops.</p>
        `
    },
    epam: {
        banner: "epam.png",
        content: `
            <h3>Software Development Engineer II - EPAM Systems</h3>
            <p>Designed & deployed 40+ REST APIs with CQRS & batch processing.</p>
            <p>Optimized AWS Lambda invocations, reducing API SLAs by 50%.</p>
            <p>Managed client onboarding for a top financial organization.</p>
            <p>Led API performance optimizations and mentored 9 interns.</p>
        `
    },
    tcs: {
        banner: "tcs.png",
        content: `
            <h3>Software Development Engineer I - Tata Consultancy Services</h3>
            <p>Enhanced API performance by 90% for banking applications.</p>
            <p>Implemented Kafka-based real-time streaming and batch processing.</p>
            <p>Migrated applications from Java 1.7 to 1.8, reducing code complexity.</p>
        `
    },
    coign: {
        banner: "coign.png",
        content: `
            <h3>Software Intern - COIGN Consultants</h3>
            <p>Developed location-sharing functionality for a mobile app.</p>
            <p>Implemented an ATM and hospital finder, enhancing user convenience.</p>
        `
    }
};

function openPopup(company) {
    const popup = document.getElementById("popup");
    const banner = document.getElementById("popup-banner");
    const content = document.getElementById("popup-text");

    if (experienceDetails[company]) {
        banner.style.backgroundImage = `url('${experienceDetails[company].banner}')`;
        content.innerHTML = experienceDetails[company].content;
        popup.style.display = "flex"; // Ensure flex positioning
    }
}

// Close popup when clicking outside the content
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

function closePopup() {
    document.getElementById("popup").style.display = "none";
}