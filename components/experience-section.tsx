"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import Image from "next/image"

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading backend development team, implementing AI solutions for process automation, and developing data-driven applications.",
      skills: ["Python", "Node.js", "React", "TensorFlow", "OpenAI API", "Mistral AI"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Data Scientist",
      company: "DataMinds Analytics",
      period: "2018 - 2021",
      description:
        "Conducted hypothesis testing, built predictive models, and developed recommendation systems for e-commerce platforms.",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistical Analysis", "Data Visualization"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Backend Developer",
      company: "WebSolutions Co.",
      period: "2016 - 2018",
      description: "Developed RESTful APIs, implemented database solutions, and optimized application performance.",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Microservices"],
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-batik-dark batik-parang-pattern">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-batik-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-batik-dark to-transparent z-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`batik-card bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-2 relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="relative left-0 w-12 h-12 rounded-full bg-batik-accent/20 flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-batik-accent" />
                    </div>
                    <div className="w-16 h-16 rounded-md overflow-hidden border border-batik-accent/30 bg-batik-medium/30 flex items-center justify-center">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-batik-light">{exp.title}</CardTitle>
                      <p className="text-lg text-batik-accent">{exp.company}</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-batik-accent/10 text-batik-accent border-batik-accent/30 px-4 py-1"
                  >
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="mb-6 text-batik-light/90">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} className="bg-batik-medium text-batik-light hover:bg-batik-accent/30">
                      {skill}
                    </Badge>
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

export default ExperienceSection

