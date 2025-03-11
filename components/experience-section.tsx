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
      title: "Junior Data Scientist",
      company: "Badan Meteorologi, Klimatologi, dan Geofisika",
      period: "Sept - Dec 2024",
      descriptions: [
        "Streamlined data handling by automating data entry and processing with a ELT pipeline, reducing data refresh time by 30% and improving data reliability.",
        "Coordinated and supported meetings between project developers and end-users to enhance communication and project alignment.",
        "Developed strategic KPI dashboards with Flask and React, improving managerial decision-making efficiency by 20%.",
        "Ensured efficient data visualization clarity for management, maintaining daily updates and achieving a 98% data accuracy rate.",
        "Developed a React dashboard integrated with a deep learning model to monitor sensor data and report anomalies, achieving 94% detection accuracy and reducing false positives by 40%.",
      ],
      skills: ["Python", "Node.js", "React", "TensorFlow", "ETL", "Statistical Analysis", "Data Visualization"],
      logo: "/bmkg.jpeg?height=80&width=80",
    },
    {
      title: "IT Project Consultant",
      company: "Ministry of Marine Affairs and Fisheries Indonesia",
      period: "Feb - Jun 2023",
      descriptions: [
        "Optimized data management and validation for over 10,000 alumnus data sets using Python and SQL pipeline, resulting in a 40% increase in data processing efficiency and seamless integration with E-Latar.",
        "Served as a back-end developer by designing and implementing robust APIs for the e-learning platform, ensuring secure logic and efficient data exchange.",
        "Organized cross-functional meetings to align stakeholders on application design, accelerating project milestones by 15%.",
      ],
      skills: ["Python", "SQL", "ETL", "Rest API", "Software Documentation", "FastAPI"],
      logo: "/kkp.jpeg?height=80&width=80",
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
                <ul className="mb-6 text-batik-light/90 list-disc pl-5 space-y-2">
                  {exp.descriptions.map((desc, idx) => ( // enumerate key dan value
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
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