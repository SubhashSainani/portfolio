// Hardcoded static data to replace backend API calls for GitHub Pages deployment.

const getAssetUrl = (path: string) => {
    if (!path || path.startsWith('http')) return path;
    // Ensure we correctly append the Vite base URL for GitHub Pages
    const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${base}${cleanPath}`;
};

export const profileData = {
    id: 1,
    name: "Subhash",
    title: "Java Software Engineer",
    summary: "Java Software Engineer with 2 years of experience building microservices for a fintech platform serving millions of users. Skilled in Spring Boot, Docker, Kubernetes, and CI/CD automation. Focused on writing clean, maintainable code and solving complex technical problems.",
    aboutDetails: "I am a versatile Software Engineer with a strong foundation in backend development and cloud technologies. Currently pursuing a Master of Information Technology at Deakin University, majoring in Networking and Cloud Technologies.",
    careerGoals: "My goal is to leverage my expertise in Java and microservices architecture to build scalable, secure, and high-performance financial systems that serve global users.",
    coreStrengths: ["Microservices Architecture", "Spring Boot", "Cloud Native Development", "CI/CD Automation"],
    softSkills: ["Problem-solving", "Team Collaboration", "Agile Methodologies", "Technical Leadership"],
    email: "subhashsainani4@gmail.com",
    githubLink: "https://github.com",
    linkedinLink: "https://linkedin.com/in/subhashsainani/",
    profileImageUrl: getAssetUrl("/images/profile.jpg"),
    resumeUrl: null,
};

export const experienceData = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Telenor Microfinance Bank - Easypaisa",
        duration: "Aug 2021 \u2013 Jun 2023",
        responsibilities: "Leading digital financial services in Pakistan. Leading development of microservices and RESTful APIs.",
        achievements: [
            "Resolved critical issues and bugs across the platform, achieving 30% reduction in system downtime and significantly improving application reliability for millions of users.",
            "Designed and implemented RESTful APIs and microservices architecture in collaboration with a 5-person development team, improving system scalability and reducing deployment time.",
            "Designed Led implementation of security enhancements and performance optimizations, resulting in faster response times and improved user engagement across mobile and web platforms.",
            "Collaborated with QA team and stakeholders through agile sprints to ensure high software quality and alignment with business objectives, consistently delivering projects on time and within scope.",
            "Focused on writing clean, maintainable code and solving complex technical problems for a fintech platform serving millions of users."
        ],
        orderIndex: 1
    },
    {
        id: 2,
        role: "Software Engineering Intern",
        company: "Inter-Process Communication Project",
        duration: "Jun 2020",
        responsibilities: "Internship focusing on system-level communication and software development practices.",
        achievements: [
            "Successfully completed internship program with focus on Inter-Process Communication.",
            "Gained hands-on experience in modern software development life cycles.",
            "Developed core technical competencies in system-level programming."
        ],
        orderIndex: 2
    }
];

export const projectsData = [
    {
        id: 1,
        name: "Stock Tracker",
        description: "A real-time stock tracking application built with Java and Spring Boot, featuring live price updates and portfolio management.",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Maven"],
        keyFeatures: ["Real-time Tracking", "Portfolio Analytics", "Historical Data Visualization", "Custom Watchlists"],
        githubLink: "https://github.com/SubhashSainani/stock-tracker",
        liveDemoLink: null,
        imageUrl: getAssetUrl("/images/stock-tracker.jpg"),
        orderIndex: 1
    },
    {
        id: 2,
        name: "Online Voting Platform",
        description: "Built a secure, microservices-based online voting system with Spring Boot, supporting user registration, authentication, vote casting, and real-time result tracking.",
        techStack: ["Java", "Spring Boot", "Docker", "Kubernetes", "GitHub Actions", "API Gateway", "Service Discovery", "CI/CD"],
        keyFeatures: ["API Gateway", "Service Discovery", "Containerization", "CI/CD"],
        githubLink: "https://github.com/SubhashSainani/online-voting-platform",
        liveDemoLink: null,
        imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
        orderIndex: 2
    },
    {
        id: 3,
        name: "Modern Portfolio Application",
        description: "A highly interactive, full-stack personal portfolio demonstrating modern UI/UX principles, animations, and responsive design.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Express", "Node.js"],
        keyFeatures: ["Sleek UI/UX", "Smooth Animations", "Responsive Glassmorphism", "Dynamic Data Injection"],
        githubLink: "https://github.com/SubhashSainani",
        liveDemoLink: null,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        orderIndex: 3
    }
];

export const skillsData = [
    { id: 1, category: "Backend", name: "Java", proficiency: null, orderIndex: 1 },
    { id: 2, category: "Backend", name: "Spring Boot", proficiency: null, orderIndex: 2 },
    { id: 3, category: "Backend", name: "Hibernate", proficiency: null, orderIndex: 3 },
    { id: 4, category: "Backend", name: "Spring", proficiency: null, orderIndex: 4 },
    { id: 5, category: "Backend", name: "Microservices", proficiency: null, orderIndex: 5 },
    { id: 6, category: "Backend", name: "RESTful APIs", proficiency: null, orderIndex: 6 },
    { id: 7, category: "Backend", name: "Express", proficiency: null, orderIndex: 7 },
    { id: 8, category: "Backend", name: "Node.js", proficiency: null, orderIndex: 8 },
    { id: 9, category: "Frontend", name: "React", proficiency: null, orderIndex: 9 },
    { id: 10, category: "Frontend", name: "TypeScript", proficiency: null, orderIndex: 10 },
    { id: 11, category: "Frontend", name: "Tailwind CSS", proficiency: null, orderIndex: 11 },
    { id: 12, category: "Frontend", name: "Framer Motion", proficiency: null, orderIndex: 12 },
    { id: 13, category: "Frontend", name: "Vite", proficiency: null, orderIndex: 13 },
    { id: 14, category: "DevOps", name: "Docker", proficiency: null, orderIndex: 14 },
    { id: 15, category: "DevOps", name: "Kubernetes", proficiency: null, orderIndex: 15 },
    { id: 16, category: "DevOps", name: "AWS", proficiency: null, orderIndex: 16 },
    { id: 17, category: "DevOps", name: "GCP", proficiency: null, orderIndex: 17 },
    { id: 18, category: "DevOps", name: "Jenkins", proficiency: null, orderIndex: 18 },
    { id: 19, category: "DevOps", name: "CI/CD", proficiency: null, orderIndex: 19 },
    { id: 20, category: "DevOps", name: "Terraform", proficiency: null, orderIndex: 20 },
    { id: 21, category: "Languages", name: "JavaScript", proficiency: null, orderIndex: 21 },
    { id: 22, category: "Languages", name: "SQL", proficiency: null, orderIndex: 22 },
    { id: 23, category: "Languages", name: "C++", proficiency: null, orderIndex: 23 },
    { id: 24, category: "Languages", name: "C", proficiency: null, orderIndex: 24 },
    { id: 25, category: "Databases", name: "PostgreSQL", proficiency: null, orderIndex: 25 },
    { id: 26, category: "Databases", name: "MongoDB", proficiency: null, orderIndex: 26 },
    { id: 27, category: "Tools", name: "Git", proficiency: null, orderIndex: 27 },
    { id: 28, category: "Tools", name: "GitHub", proficiency: null, orderIndex: 28 },
    { id: 29, category: "Tools", name: "Postman", proficiency: null, orderIndex: 29 },
    { id: 30, category: "Tools", name: "Maven", proficiency: null, orderIndex: 30 },
    { id: 31, category: "DevOps", name: "GitHub Actions", proficiency: null, orderIndex: 31 },
    { id: 32, category: "Infrastructure", name: "API Gateway", proficiency: null, orderIndex: 32 },
    { id: 33, category: "Infrastructure", name: "Service Discovery", proficiency: null, orderIndex: 33 },
];

export const certificationsData = [
    {
        id: 1,
        name: "System Reliability & Downtime Reduction Award",
        issuingOrg: "Telenor Microfinance Bank",
        date: "2022",
        credentialLink: null,
        orderIndex: 1
    },
    {
        id: 2,
        name: "Java Masterclass",
        issuingOrg: "Udemy",
        date: "2023",
        credentialLink: null,
        orderIndex: 2
    },
    {
        id: 3,
        name: "Networking & Cloud Technologies",
        issuingOrg: "TAFE",
        date: "2024",
        credentialLink: null,
        orderIndex: 3
    }
];

export const educationData = [
    {
        id: 1,
        degree: "Master of Information Technology (Professional)",
        university: "Deakin University",
        year: "Jul 2023 \u2013 Sep 2025",
        coursework: "Software deployment and Operations, Applied Software Engineering, Cloud Native Application Development",
        achievements: getAssetUrl("/images/deakin.jpg"),
        orderIndex: 1
    },
    {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        university: "Ghulam Ishaq Khan Institute - GIKI",
        year: "Sep 2017 \u2013 Jul 2021",
        coursework: "Data Analysis, Software Engineering, Operating Systems, Algorithms, Artificial Intelligence",
        achievements: getAssetUrl("/images/giki.png"),
        orderIndex: 2
    }
];
