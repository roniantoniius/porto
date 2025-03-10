"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, LineChart, Cpu } from "lucide-react"

const SkillSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5 text-batik-accent" />,
      skills: [
        { name: "Python", image: "/placeholder.svg?height=60&width=60" },
        { name: "JavaScript", image: "/placeholder.svg?height=60&width=60" },
        { name: "Java", image: "/placeholder.svg?height=60&width=60" },
        { name: "R", image: "/placeholder.svg?height=60&width=60" },
        { name: "SQL", image: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "Data Science & ML",
      icon: <LineChart className="h-5 w-5 text-batik-accent" />,
      skills: [
        { name: "Machine Learning", image: "/placeholder.svg?height=60&width=60" },
        { name: "Statistical Analysis", image: "/placeholder.svg?height=60&width=60" },
        { name: "Data Visualization", image: "/placeholder.svg?height=60&width=60" },
        { name: "Predictive Modeling", image: "/placeholder.svg?height=60&width=60" },
        { name: "Natural Language Processing", image: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: <Database className="h-5 w-5 text-batik-accent" />,
      skills: [
        { name: "PostgreSQL", image: "/placeholder.svg?height=60&width=60" },
        { name: "MongoDB", image: "/placeholder.svg?height=60&width=60" },
        { name: "AWS", image: "/placeholder.svg?height=60&width=60" },
        { name: "Google Cloud", image: "/placeholder.svg?height=60&width=60" },
        { name: "Docker & Kubernetes", image: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "AI & Frameworks",
      icon: <Cpu className="h-5 w-5 text-batik-accent" />,
      skills: [
        { name: "TensorFlow", image: "/placeholder.svg?height=60&width=60" },
        { name: "PyTorch", image: "/placeholder.svg?height=60&width=60" },
        { name: "OpenAI API", image: "/placeholder.svg?height=60&width=60" },
        { name: "Mistral AI", image: "/placeholder.svg?height=60&width=60" },
        { name: "Computer Vision", image: "/placeholder.svg?height=60&width=60" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-batik-medium/20 batik-wind-pattern">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-batik-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-batik-dark to-transparent z-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`batik-card bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-batik-accent/20 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-batik-light">{category.category}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col items-center p-3 rounded-lg bg-batik-medium/20 hover:bg-batik-accent/10 transition-all duration-300 border border-transparent hover:border-batik-accent/30 ${
                        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                      style={{ transitionDelay: `${index * 100 + idx * 100}ms` }}
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-batik-medium/30 border border-batik-accent/20 flex items-center justify-center mb-3">
                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-center text-batik-light font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection

