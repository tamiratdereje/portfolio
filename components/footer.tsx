import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import resumeData from "@/data/resume-data"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {resumeData.personalInfo.github && (
            <Link
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          <Link
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${resumeData.personalInfo.email}`}
            className="text-muted-foreground hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
