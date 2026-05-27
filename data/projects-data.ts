export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github?: string | null
  demo: string | null
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rate Eat",
    description:
      "A comprehensive mobile application that empowers users to give and consume item-specific reviews while highlighting the growth points of restaurants and food businesses. Built with a Node.js backend, MongoDB database, and Flutter mobile client. I led the mobile development effort with Flutter.",
    image: null,
    tags: ["Flutter", "Node.js", "MongoDB", "Mobile"],
    github: null,
    demo: "https://linktr.ee/rateeat",
  },
  {
    id: 2,
    title: "Alen",
    description:
      "A home service app connecting professionals with clients across web and mobile. The app has 1k+ downloads on the Play Store. I was one of three backend developers, designing core APIs and integrations.",
    image: null,
    tags: ["Backend", "Node.js", "Mobile", "Web"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.alenplc.alen",
  },
  {
    id: 3,
    title: "Real Estate App",
    description:
      "Revolutionizes property search and management with features like a chatting and booking system. Powered by Flutter for the mobile front end and Node.js with Express.js in TypeScript for the backend.",
    image: null,
    tags: ["Flutter", "Node.js", "Express.js", "TypeScript"],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Pesa Mezani",
    description:
      "A simple tool to organize finances, plan future budgets, and participate in the local market by exchanging value between users via in-app credits. I worked as a full-stack developer using MongoDB, Node.js, Realm DB, Firebase, and Flutter.",
    image: null,
    tags: ["Flutter", "Node.js", "MongoDB", "Firebase", "Realm DB"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.michal.pocket_friend",
  },
]

export const featuredProjects = [projects[0], projects[1], projects[3]]

export default {
  projects,
  featuredProjects,
}
