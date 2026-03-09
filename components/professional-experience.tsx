"use client"

import { Calendar } from "lucide-react"

export function ProfessionalExperienceSection() {
  const experiences = [
    {
      institution: "St. Paul Medical Center",
      position: "OB-GYN Intern",
      duration: "2015 - 2016",
      description:
        "Completed clinical internship, gaining foundational experience in obstetric and gynecological procedures under senior physicians.",
      icon: "🏥",
    },
    {
      institution: "St. Paul Medical Center",
      position: "OB-GYN Resident",
      duration: "2016 - 2019",
      description:
        "Completed 3-year residency program with specialized training in prenatal care, labor and delivery, and gynecological surgery.",
      icon: "👨‍⚕️",
    },
    {
      institution: "Metropolitan Hospital",
      position: "Senior Resident & Chief Resident",
      duration: "2019 - 2020",
      description:
        "Led clinical rounds and mentored junior residents while managing complex obstetric and gynecological cases.",
      icon: "⭐",
    },
    {
      institution: "Women's Health Medical Group",
      position: "Attending Physician",
      duration: "2020 - Present",
      description:
        "Established private practice specializing in comprehensive women's healthcare, serving diverse patient populations with personalized care.",
      icon: "💼",
    },
  ]

  return (
    <section id="experience" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated journey in women's healthcare with extensive training and clinical expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-0 md:pl-32">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-0 w-16 h-16 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-2xl border-4 border-background shadow-lg hidden md:flex">
                  {experience.icon}
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{experience.position}</h3>
                      <p className="text-primary font-semibold">{experience.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
