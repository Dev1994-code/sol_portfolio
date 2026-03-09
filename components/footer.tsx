export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary font-bold">
                SE
              </div>
              <div>
                <p className="font-semibold text-white">Dr.Solomon Engdawork</p>
                <p className="text-xs text-white/80">OB-GYN Specialist</p>
              </div>
            </div>
            <p className="text-sm text-white/80">Compassionate women's healthcare at every stage of life.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#resources" className="text-white/80 hover:text-white transition-colors text-sm">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Prenatal Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Family Planning
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Menopause Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Gynecology
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">(555) 234-5678</li>
              <li className="text-sm text-white/80">hello@drsarahmitchell.com</li>
              <li className="text-sm text-white/80">1500 Medical Drive, Suite 200</li>
              <li className="text-sm text-white/80">New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-white/20 pt-8"> */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Accessibility</h4>
              <p className="text-sm text-white/80">
                Our clinic is fully accessible. Contact us if you need accommodations.
              </p>
            </div>
          </div> */}

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm text-white/80">
              © {currentYear} Dr.Solomon Engdawork, MD. All rights reserved. This website is for informational purposes
              only and does not constitute medical advice.
            </p>
          </div>
        {/* </div> */}
      </div>
  </footer>
  )
}
