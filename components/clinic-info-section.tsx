import { MapPin, Phone, Globe } from "lucide-react"

export function ClinicInfoSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Medical Plaza Building</h3>
                <p className="text-muted-foreground">1500 Medical Drive, Suite 200</p>
                <p className="text-muted-foreground">Black Lion, BL 1002</p>
              </div>
              <a href="https://maps.google.com/maps?q=8.984241,38.775354&ll=8.984241,38.775354&z=16" className="inline-block text-primary hover:text-primary/80 font-semibold text-sm">
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Clinic Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Visit Our Clinic</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our modern, comfortable clinic is designed with your wellbeing in mind. We provide a welcoming
                environment where you can feel safe and respected.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Easy access with ample parking available. Located near public transportation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                  <p className="text-muted-foreground">
                    Call +251923500318 for appointments, or text us for quick inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hospital Affiliation</h3>
                  <p className="text-muted-foreground">
                    Affiliated with Metropolitan Medical Center for obstetric services and emergencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-semibold text-foreground mb-4">Clinic Amenities</h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Private consultation rooms",
                  "Modern ultrasound equipment",
                  "Comfortable waiting area",
                  "Free WiFi",
                  "Accessible facilities",
                  "Professional staff",
                ].map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
