"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "New Mother",
      rating: 5,
      testimonial:
        "Dr. Mitchell provided exceptional prenatal care and made me feel completely comfortable throughout my pregnancy. Her expertise and compassionate approach made all the difference.",
      image: "/sol.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Patient",
      rating: 5,
      testimonial:
        "I've been seeing Dr. Mitchell for over 10 years. She truly listens to her patients and takes time to explain everything. I wouldn't trust my care to anyone else.",
      image: "/sol.jpg",
    },
    {
      name: "Jessica Williams",
      role: "New Mother",
      rating: 5,
      testimonial:
        "Dr. Mitchell's support during labor and delivery was incredible. She made me feel empowered and informed about every decision. Highly recommend!",
      image: "/sol.jpg",
    },
    {
      name: "Maria Garcia",
      role: "Patient",
      rating: 5,
      testimonial:
        "From routine care to family planning, Dr. Mitchell provides thorough, compassionate healthcare. Her team is also wonderful and makes the office experience pleasant.",
      image: "/sol.jpg",
    },
    {
      name: "Lisa Anderson",
      role: "Patient",
      rating: 5,
      testimonial:
        "I've never felt rushed during an appointment with Dr. Mitchell. She takes time to address all my concerns and provides clear, evidence-based recommendations.",
      image: "/sol.jpg",
    },
    {
      name: "Amanda Thompson",
      role: "New Mother",
      rating: 5,
      testimonial:
        "Dr. Mitchell guided me through my pregnancy with confidence and care. Her knowledge and warmth made the experience truly special. Thank you!",
      image: "/sol.jpg",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay) {
      const timer = setTimeout(() => {
        setIsAutoPlay(true)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [isAutoPlay])

  const getTestimonialPosition = (index) => {
    let position = (index - currentIndex + testimonials.length) % testimonials.length

    if (position > testimonials.length / 2) {
      position -= testimonials.length
    }

    return position
  }

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Patient Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from patients who have experienced Dr. Mitchell's compassionate, expert care.
          </p>
        </div>

        <div className="relative h-80 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full perspective">
            {testimonials.map((testimonial, index) => {
              const position = getTestimonialPosition(index)
              const isCenter = position === 0
              const isLeft = position === -1
              const isRight = position === 1

              let transform = "translateX(0) scale(0)"
              let opacity = 0
              let zIndex = 0

              if (isLeft) {
                transform = "translateX(-120%) scale(0.75)"
                opacity = 0.5
                zIndex = 1
              } else if (isCenter) {
                transform = "translateX(0) scale(1)"
                opacity = 1
                zIndex = 10
              } else if (isRight) {
                transform = "translateX(120%) scale(0.75)"
                opacity = 0.5
                zIndex = 1
              }

              return (
                <div
                  key={index}
                  className="absolute w-full sm:w-3/4 lg:w-2/3 transition-all duration-700 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  {isCenter ? (
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-white border-0 shadow-2xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-primary-foreground/90">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-white text-white" />
                        ))}
                      </div>

                      <p className="text-white/95 leading-relaxed text-lg">{testimonial.testimonial}</p>
                    </div>
                  ) : (
                    <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{testimonial.testimonial}</p>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 my-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-xl text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Patient testimonials are provided voluntarily and represent individual experiences.
          </p>
          <p className="text-sm text-muted-foreground">
            Results may vary. All patients are required to provide honest feedback in compliance with healthcare
            regulations.
          </p>
        </div>
      </div>
    </section>
  )
}
