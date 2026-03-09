// "use client"

// import { useState } from "react"
// import { Calendar, MapPin, Phone } from "lucide-react"

// export function AppointmentSection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     serviceType: "",
//     preferredDate: "",
//     preferredTime: "",
//     message: "",
//   })

//   const handleChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Here you would send the data to your backend
//     alert("Thank you! We will contact you shortly to confirm your appointment.")
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       serviceType: "",
//       preferredDate: "",
//       preferredTime: "",
//       message: "",
//     })
//   }

//   const clinicHours = [
//     { day: "Monday - Thursday", hours: "8:00 AM - 5:00 PM" },
//     { day: "Friday", hours: "8:00 AM - 3:00 PM" },
//     { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
//     { day: "Sunday", hours: "Closed" },
//   ]

//   return (
//     <section id="appointment" className="py-20 sm:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Schedule Your Appointment</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             We're here to serve you. Book your appointment today or contact our clinic for more information.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Clinic Info */}
//           <div className="space-y-8">
//             {/* Contact Info */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-foreground">Phone</p>
//                     <p className="text-muted-foreground">+251921238004</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-foreground">Address</p>
//                     <p className="text-muted-foreground">Medical Plaza Building</p>
//                     <p className="text-muted-foreground">1500 Medical Drive, Suite 200</p>
//                     <p className="text-muted-foreground">Bole Michael, BM 1002</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-foreground">Available</p>
//                     <p className="text-muted-foreground">Same-day appointments available</p>
//                     <p className="text-muted-foreground">Emergency services 24/7</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Hours */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-foreground">Clinic Hours</h3>
//               <div className="space-y-3">
//                 {clinicHours.map((item, index) => (
//                   <div key={index} className="flex justify-between items-center pb-2 border-b border-border">
//                     <p className="text-foreground font-medium">{item.day}</p>
//                     <p className="text-muted-foreground text-sm">{item.hours}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* First-time patient info */}
//             <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
//               <h4 className="font-semibold text-foreground mb-2">First-Time Patients</h4>
//               <p className="text-sm text-muted-foreground mb-3">
//                 Please arrive 15 minutes early to complete medical history forms and insurance information.
//               </p>
//               <p className="text-sm text-muted-foreground">
//                 Bring insurance card, photo ID, and any medical records from previous providers.
//               </p>
//             </div>
//           </div>

//           {/* Appointment Form */}
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Full Name*</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Email*</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Phone Number*</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                     placeholder="(555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Service Type*</label>
//                   <select
//                     name="serviceType"
//                     value={formData.serviceType}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="prenatal">Prenatal Care</option>
//                     <option value="gynecology">Routine Gynecologic Care</option>
//                     <option value="contraception">Family Planning</option>
//                     <option value="menopause">Menopause Management</option>
//                     <option value="infertility">Infertility Consultation</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date*</label>
//                   <input
//                     type="date"
//                     name="preferredDate"
//                     value={formData.preferredDate}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Time*</label>
//                   <select
//                     name="preferredTime"
//                     value={formData.preferredTime}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
//                   >
//                     <option value="">Select a time</option>
//                     <option value="9:00">9:00 AM</option>
//                     <option value="10:00">10:00 AM</option>
//                     <option value="11:00">11:00 AM</option>
//                     <option value="12:00">12:00 PM</option>
//                     <option value="2:00">2:00 PM</option>
//                     <option value="3:00">3:00 PM</option>
//                     <option value="4:00">4:00 PM</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">Additional Notes</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
//                   rows={4}
//                   placeholder="Tell us about any specific concerns or questions..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-colors"
//               >
//                 Request Appointment
//               </button>

//               <p className="text-xs text-muted-foreground text-center">
//                 We'll contact you within 24 hours to confirm your appointment. Emergency services available 24/7.
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
