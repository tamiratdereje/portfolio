"use client"
import resumeData from "@/data/resume-data"
import "../app/pdf-styles.css"

export function ResumePDFTemplate() {
  const contactParts = [
    resumeData.personalInfo.email,
    resumeData.personalInfo.phone,
    resumeData.personalInfo.location,
    resumeData.personalInfo.linkedin,
    resumeData.personalInfo.github,
    resumeData.personalInfo.website,
  ].filter(Boolean)

  return (
    <div className="resume-container">
      <div className="resume-main">
        <header className="resume-header">
          <h1 className="resume-name">{resumeData.personalInfo.name}</h1>
          <h2 className="resume-title">{resumeData.personalInfo.title}</h2>
          <p className="resume-subtitle">{resumeData.summary[0]}</p>
          <p className="resume-contact">{contactParts.join(" • ")}</p>
        </header>

        <div className="resume-content">
          <section className="resume-section">
            <h3 className="resume-section-title">SKILLS</h3>
            <ul className="resume-skills-list">
              <li className="resume-skill-item">
                <span className="resume-skill-bullet">●</span> Languages ({resumeData.skills.languages.join(", ")})
              </li>
              <li className="resume-skill-item">
                <span className="resume-skill-bullet">●</span> Backend Frameworks ({resumeData.skills.architecture.join(", ")})
              </li>
              <li className="resume-skill-item">
                <span className="resume-skill-bullet">●</span> Databases ({resumeData.skills.cloud.join(", ")})
              </li>
              <li className="resume-skill-item">
                <span className="resume-skill-bullet">●</span> Data & AI ({resumeData.skills.data.join(", ")})
              </li>
              <li className="resume-skill-item">
                <span className="resume-skill-bullet">●</span> Frontend & Mobile ({resumeData.skills.quality.join(", ")})
              </li>
            </ul>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL EXPERIENCE</h3>

            {resumeData.experience.map((job, index) => (
              <div key={index} className="resume-job">
                <div className="resume-job-header">
                  <div className="resume-job-company-title">
                    <span className="resume-job-company">{job.company.toUpperCase()}</span> -{" "}
                    <span className="resume-job-title">{job.title}</span>
                  </div>
                  <div className="resume-job-period">
                    {job.period} ({job.location})
                  </div>
                </div>
                <ul className="resume-job-responsibilities">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="resume-job-responsibility">
                      <span className="resume-responsibility-bullet">●</span> {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {resumeData.education.length > 0 && (
            <section className="resume-section">
              <h3 className="resume-section-title">EDUCATION</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="resume-job">
                  <div className="resume-job-header">
                    <div className="resume-job-company-title">
                      <span className="resume-job-title">{edu.degree}</span>
                    </div>
                    <div className="resume-job-period">
                      {edu.period}
                      {edu.location ? ` (${edu.location})` : ""}
                    </div>
                  </div>
                  <p>{edu.institution}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
