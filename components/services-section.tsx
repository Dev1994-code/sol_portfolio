import { Baby, Heart, Pill, Stethoscope, Zap, Users } from "lucide-react"

export function ServicesSection() {
  const obstetricServices = [
    {
      icon: Baby,
      title: "Prenatal Care",
      description:
        "Comprehensive care during pregnancy including ultrasounds, monitoring, and guidance for a healthy pregnancy.",
    },
    {
      icon: Heart,
      title: "Labor & Delivery",
      description:
        "Expert care during labor and delivery with access to all modern obstetric interventions when needed.",
    },
    {
      icon: Users,
      title: "Postnatal Care",
      description: "Follow-up care after delivery including recovery monitoring and newborn health screening.",
    },
  ]

  const gynecologyServices = [
    {
      icon: Stethoscope,
      title: "Routine Gynecologic Care",
      description: "Regular check-ups, pap smears, and preventive health screening for optimal wellness.",
    },
    {
      icon: Pill,
      title: "Family Planning",
      description: "Contraception counseling and family planning services tailored to your needs.",
    },
    {
      icon: Zap,
      title: "Menopause Management",
      description: "Compassionate care through menopause including hormone therapy and symptom management.",
    },
  ]

  const ServiceCard = ({ icon: Icon, title, description }: any) => (
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )

  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Services & Areas of Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive obstetric and gynecologic care designed to support women through every stage of life.
          </p>
        </div>

        <div className="space-y-16">
          {/* Obstetrics */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Obstetrics</h3>
              <p className="text-muted-foreground">Specialized care for pregnancy, labor, and postpartum recovery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {obstetricServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Gynecology */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Gynecology</h3>
              <p className="text-muted-foreground">Comprehensive women's health care across all life stages.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gynecologyServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "High-Risk Pregnancy Management",
                "Infertility Consultation & Referral",
                "Menstrual Disorder Treatment",
                "Cervical Cancer Screening (Pap Smear)",
                "Transvaginal Ultrasound Services",
                "In-Office Procedures",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
