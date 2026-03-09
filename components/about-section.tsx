export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="/sol.jpg"
              alt="Dr. Solomon Engdawork consulting with a patient"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-border/50" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Dr. Solomon Engdawork</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Solomon Engdawork is a board-certified obstetrician-gynecologist with over 18 years of experience in
                comprehensive women's healthcare. She earned her MD from Johns Hopkins University School of Medicine and
                completed her residency at Massachusetts General Hospital.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Medical Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in treating each patient as an individual with unique needs and concerns. My approach combines
                evidence-based medicine with compassionate, personalized care. I'm committed to building strong
                relationships with my patients and empowering them to make informed decisions about their health.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Education & Credentials</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>MD, Johns Hopkins University School of Medicine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Residency in OB-GYN, Massachusetts General Hospital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Board Certified, American Board of Obstetrics and Gynecology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Fellow, American College of Obstetricians and Gynecologists (FACOG)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Specialty Certification in High-Risk Obstetrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
