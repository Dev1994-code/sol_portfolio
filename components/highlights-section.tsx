import { Heart, Users, Award, Clock } from "lucide-react"

export function HighlightsSection() {
  const highlights = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and comfort are my top priorities in every consultation.",
    },
    {
      icon: Award,
      title: "Board Certified",
      description: "Certified by the American Board of Obstetrics and Gynecology.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Supported by a dedicated nursing and administrative staff.",
    },
    {
      icon: Clock,
      title: "Same-Day Appointments",
      description: "Flexible scheduling to accommodate your busy lifestyle.",
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose Dr. Solomon</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining medical expertise with a compassionate approach to women's healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
