import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-24" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <p className="text-sm font-medium text-accent">Compassionate Women's Healthcare</p>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Caring for Women at Every Stage of Life
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                With over 4 years of experience in obstetrics and gynecology, I'm dedicated to providing comprehensive,
                personalized care for every woman's unique health journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link
                href="#appointment"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-center transition-colors"
              >
                Book an Appointment
              </Link> */}
              <Link
                href="#contact"
                className="px-8 py-4 rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold text-center transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/sol.jpg"
              alt="Dr. Solomon Engdawork - OB-GYN Specialist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-border/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
