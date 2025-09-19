"use client"

import { useEffect, useRef, useState } from "react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    advisors: 0,
    years: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  const finalValues = {
    clients: 330,
    projects: 850,
    advisors: 25,
    years: 5,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    Object.keys(finalValues).forEach((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues]
      const increment = finalValue / steps
      let currentValue = 0

      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValue) {
          currentValue = finalValue
          clearInterval(timer)
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }))
      }, stepDuration)
    })
  }

  const stats = [
    {
      value: counters.clients,
      suffix: "+",
      label: "ACTIVE CLIENTS",
      color: "from-primary to-accent",
    },
    {
      value: counters.projects,
      suffix: "+",
      label: "PROJECTS DONE",
      color: "from-accent to-primary",
    },
    {
      value: counters.advisors,
      suffix: "+",
      label: "TEAM ADVISORS",
      color: "from-primary to-accent",
    },
    {
      value: counters.years,
      suffix: "+",
      label: "GLORIOUS YEARS",
      color: "from-accent to-primary",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-20 bg-gradient-to-r from-black via-[#ff712c] to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-[1170px] mx-auto px-6 xl:px-0 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-2">
                <div className={`text-4xl lg:text-6xl font-bold text-gray-200 mb-2`}>
                  {stat.value}
                  <span className="text-white/80">{stat.suffix}</span>
                </div>
                <div className="text-sm lg:text-base font-semibold text-white/90 tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  )
}
