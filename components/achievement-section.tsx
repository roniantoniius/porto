"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const AchievementSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const achievements = [
    {
      title: "1st at Marine Information System Competency Week (2023)",
      organization: "Universitas Pendidikan Indonesia",
      year: "2023",
      description: "Won 1st place in Web Creation category by developing 'Tangan Laut' app that streamlined marine debris donation processing and increased user engagement by 50%.",
    },
    {
      title: "11th at Hackathon Data Science Komdigi",
      organization: "Kementerian Komunikasi Digital",
      year: "2024",
      description: "Enhanced product recommendations by 25% using Associate Rule Mining and developed scalable API for customer applications, improving system adaptability by 40%.",
    },
    {
      title: "Juara Google Cloud Platform 11",
      organization: "Google Cloud",
      year: "2025",
      description: "Optimized cloud infrastructure solutions through innovative architecture design, achieving 30% performance improvement in resource-intensive applications.",
    },
    {
      title: "Published 3 Paper at Proceeding Indonesian Conference of Maritim",
      organization: "Indonesian Conference of Maritim 2024",
      year: "2024",
      description: "Presented research on WebGIS disaster mapping (40% accuracy improvement), enterprise architecture design (30% operational optimization), and AI-based marine tourism websites enhancing conservation efforts.",
    },
  ]

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-batik-medium/20 batik-parang-pattern">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-batik-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-batik-dark to-transparent z-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`batik-card h-full bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-batik-gold/10"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-batik-accent/10"></div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-batik-gold/20 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-batik-gold" />
                  </div>
                  <CardTitle className="text-xl font-bold text-batik-light">{achievement.title}</CardTitle>
                </div>
                <div className="text-sm font-medium text-batik-accent ml-13">
                  {achievement.organization} | {achievement.year}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="text-batik-light/90">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementSection

