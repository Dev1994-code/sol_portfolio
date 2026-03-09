// import { BookOpen, Lightbulb, AlertCircle } from "lucide-react"

// export function ResourcesSection() {
//   const articles = [
//     {
//       title: "First Trimester Pregnancy Care: What to Expect",
//       category: "Pregnancy Tips",
//       excerpt: "Learn what happens during the first trimester and how to prepare for a healthy pregnancy journey.",
//       readTime: "5 min read",
//       icon: BookOpen,
//     },
//     {
//       title: "Understanding Your Menstrual Cycle",
//       category: "Women's Health",
//       excerpt: "A comprehensive guide to understanding the phases of your menstrual cycle and what's normal.",
//       readTime: "6 min read",
//       icon: Lightbulb,
//     },
//     {
//       title: "Managing Menopause Symptoms Naturally",
//       category: "Life Stages",
//       excerpt: "Explore evidence-based strategies for managing menopause symptoms and maintaining quality of life.",
//       readTime: "7 min read",
//       icon: AlertCircle,
//     },
//     {
//       title: "Contraception Options Explained",
//       category: "Family Planning",
//       excerpt: "Compare different contraception methods to find the best option for your lifestyle and health.",
//       readTime: "8 min read",
//       icon: BookOpen,
//     },
//     {
//       title: "Postpartum Recovery: Physical & Emotional Health",
//       category: "Postpartum Care",
//       excerpt: "Important information about recovering after childbirth and recognizing postpartum depression signs.",
//       readTime: "6 min read",
//       icon: AlertCircle,
//     },
//     {
//       title: "Cervical Health & Cancer Screening",
//       category: "Preventive Care",
//       excerpt: "Everything you need to know about cervical cancer screening and maintaining cervical health.",
//       readTime: "5 min read",
//       icon: Lightbulb,
//     },
//   ]

//   const faqs = [
//     {
//       question: "When should I schedule my first gynecological exam?",
//       answer:
//         "The American College of Obstetricians and Gynecologists recommends that girls have their first gynecological visit between ages 13-15, or within 3 years of becoming sexually active. Regular check-ups should continue annually.",
//     },
//     {
//       question: "How often should I get a Pap smear?",
//       answer:
//         "For women ages 21-65, a Pap smear is typically recommended every 3 years if the results are normal. Your doctor may recommend more frequent screening based on your risk factors.",
//     },
//     {
//       question: "What can I expect during a prenatal appointment?",
//       answer:
//         "During prenatal visits, we monitor your health and your baby's development through physical exams, blood tests, and ultrasounds. We also discuss nutrition, exercise, and any concerns you may have.",
//     },
//     {
//       question: "Is it normal to have irregular periods?",
//       answer:
//         "While some variation is normal, consistently irregular periods may indicate underlying health issues. We can help determine the cause and recommend appropriate treatment options.",
//     },
//     {
//       question: "What are my contraception options?",
//       answer:
//         "There are many contraception options available, including hormonal methods, barrier methods, and long-acting reversible contraceptives. We'll discuss your options and help you choose the best fit for your needs.",
//     },
//     {
//       question: "What should I do if I experience a pregnancy emergency?",
//       answer:
//         "Call 911 immediately for severe symptoms like heavy bleeding, severe abdominal pain, or loss of consciousness. Our office also provides emergency contact numbers for after-hours assistance.",
//     },
//   ]

//   return (
//     <section id="resources" className="py-20 sm:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Articles Section */}
//         <div className="mb-20">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Patient Education Resources</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Learn more about women's health topics and how to take care of yourself at every life stage.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {articles.map((article, index) => {
//               const Icon = article.icon
//               return (
//                 <div
//                   key={index}
//                   className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
//                       {article.category}
//                     </span>
//                     <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
//                     {article.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
//                   <p className="text-xs text-muted-foreground">{article.readTime}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-secondary/30 rounded-2xl p-8 sm:p-12">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Find answers to common questions about women's health and our services.
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto space-y-4">
//             {faqs.map((faq, index) => (
//               <details key={index} className="group border border-border rounded-lg overflow-hidden">
//                 <summary className="flex items-center justify-between w-full px-6 py-4 cursor-pointer hover:bg-secondary/50 transition-colors font-semibold text-foreground">
//                   {faq.question}
//                   <span className="ml-2 text-primary group-open:rotate-180 transition-transform">▼</span>
//                 </summary>
//                 <div className="px-6 py-4 bg-background border-t border-border text-muted-foreground leading-relaxed">
//                   {faq.answer}
//                 </div>
//               </details>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
