import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card border border-border">
            <Phone className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm mb-2">+251923500318</p>
            <p className="text-xs text-muted-foreground">Available during clinic hours</p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <Mail className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-2">solomon@gmail.com</p>
            <p className="text-xs text-muted-foreground">Response within 24 hours</p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground text-sm mb-2">1500 Medical Drive, Suite 200</p>
            <p className="text-muted-foreground text-sm">Black Lion, BL 1002</p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm mb-2">Mon-Thu: 8 AM - 5 PM</p>
            <p className="text-muted-foreground text-sm">Sat: 9 AM - 1 PM</p>
          </div>
        </div>

        {/* Emergency Info */}
        {/* <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8">
          <h3 className="font-semibold text-destructive mb-2">Medical Emergency?</h3>
          <p className="text-foreground mb-4">
            If you're experiencing a pregnancy emergency or other urgent medical situation, please call 911 immediately
            or go to the nearest emergency room.
          </p>
          <p className="text-sm text-muted-foreground">
            For after-hours emergencies, you will be directed to our emergency hotline through our phone system.
          </p>
        </div> */}
      </div>
    </section>
  )
}
