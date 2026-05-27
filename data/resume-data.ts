export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Publication = {
  title: string
  description: string
  year: string
  link?: string
}

export type Education = {
  degree: string
  institution: string
  period: string
  location?: string
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    phone?: string
    location: string
    linkedin: string
    github: string | null
    website: string
    leetcode?: string
    codeforces?: string
    upwork?: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
  }
  summary: string[]
  skills: {
    languages: string[]
    architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
  education: Education[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Tamirat Dereje",
    title: "Software Engineer",
    email: "tamiratdereje167@gmail.com",
    phone: "+251947408989",
    location: "Addis Ababa, Ethiopia",
    linkedin: "https://www.linkedin.com/in/tamirat-dereje-2a8b09234/",
    github: "https://github.com/tamiratdereje",
    website: "",
    leetcode: "https://leetcode.com/Tamirat/",
    codeforces: "https://codeforces.com/profile/Tamirat",
    upwork: "https://www.upwork.com/freelancers/tamiratd?p=1764619715704090624",
    photo: "/placeholder-user.jpg",
    yearsOfExperience: "6+ years in full-stack development",
    teamLeadExperience: "",
  },
  summary: [
    "Senior software engineer with over 6 years of experience in full-stack development, specializing in Machine Learning, Python, Flutter, React JS, Node.js, and data structures/algorithms. Proven track record of delivering high-quality projects using technologies like Next.js, Django, and Node.js. Skilled in designing and developing scalable mobile and web applications, implementing efficient algorithms, and working with databases.",
  ],
  skills: {
    languages: ["Python", "Java", "TypeScript", "JavaScript", "C#", "C++", "Dart"],
    architecture: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Django",
      "Spring Boot",
      "REST APIs",
    ],
    cloud: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Realm DB",
    ],
    data: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Competitive Programming",
      "Model Evaluation",
    ],
    quality: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  experience: [
    {
      title: "Python Developer",
      company: "Turing",
      period: "10/2024 – 03/2026",
      location: "California (Remote)",
      responsibilities: [
        "Collaborated with top tech companies to enhance the performance of their machine learning models.",
        "Identified and rectified over 500 model flaws, significantly improving model accuracy and performance trajectory.",
        "Applied machine learning techniques and Python programming to optimize models for complex tasks.",
        "Contributed to innovative AI solutions through careful evaluation and iteration.",
      ],
    },
    {
      title: "Head of Education",
      company: "Africa to Silicon Valley (A2SV)",
      period: "01/2023 – 01/2024",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Led the education program at A2SV, delivering high-quality training on data structures and algorithms to 32 trainees.",
        "Designed and refined curriculum focused on competitive programming and problem-solving fundamentals.",
        "Mentored students preparing for technical interviews with top Silicon Valley companies.",
      ],
    },
    {
      title: "Mobile Developer",
      company: "Eskalate",
      period: "03/2023 – 11/2023",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Worked as a Flutter mobile developer and team lead for 6 fellow engineers.",
        "Built Hakim-hub, a platform for finding hospitals, doctors, and receiving medical recommendations through a chatbot.",
        "Designed and implemented a sophisticated medical information recommendation system.",
      ],
    },
    {
      title: "Mobile Developer",
      company: "Africa to Silicon Valley (A2SV)",
      period: "08/2022 – 02/2023",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Worked as a Flutter mobile developer and deputy team leader for 5 fellow workers.",
        "Built Rate Eat — a platform for reviewing restaurants and food, and finding dining options.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Kemer Habesha",
      period: "07/2022 – 03/2023",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Built backend services for digital products including Alen, Taza, and Kemer POS.",
        "Collaborated with a team of designers and engineers delivering digital solutions to real-world problems.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Merebe Technology",
      period: "10/2021 – 06/2022",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Worked as a full-stack developer on an agile team of 10, using Django and Node.js for backend and Next.js with TypeScript for the frontend.",
        "Delivered optimal solutions to various real-world problems across multiple client projects.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "AAI Labs",
      period: "10/2020 – 09/2021",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Served as a senior developer on an audiobook synthesis project.",
        "Built the frontend using Next.js and Tailwind CSS.",
        "Developed a RESTful API with Django to provide backend services for the model's functionality.",
      ],
    },
  ],
  education: [
    {
      degree: "BSc in Software Engineering",
      institution: "Addis Ababa University (ranked 6th in Africa)",
      period: "09/2015 – 07/2019",
      location: "Addis Ababa, Ethiopia",
    },
    {
      degree: "Introduction to Competitive Programming",
      institution: "Africa to Silicon Valley (A2SV)",
      period: "12/2021 – 12/2022",
      location: "Addis Ababa, Ethiopia",
    },
  ],
  hardSkills: [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "C#",
    "C++",
    "Dart",
    "Flutter",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Django",
    "Spring Boot",
    "Next.js",
    "React",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Realm DB",
    "Machine Learning",
  ],
  softSkills: [
    "Team Leadership",
    "Mentorship",
    "Problem Solving",
    "Communication",
    "Agile Collaboration",
  ],
  languages: [],
  publications: [],
}

export default resumeData
