"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const OrganizationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const organizations = [
    {
      name: "Data Science Indonesia",
      role: "Senior Member",
      period: "2019 - Present",
      description:
        "Contributing to community projects, mentoring junior data scientists, and organizing workshops on AI and machine learning.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Tech Community Leaders",
      role: "Community Organizer",
      period: "2020 - Present",
      description:
        "Organizing tech meetups, facilitating knowledge sharing sessions, and building a network of tech professionals.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "AI Research Group",
      role: "Research Contributor",
      period: "2018 - 2021",
      description:
        "Collaborated on research papers focused on generative AI applications in business process automation.",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="organizations" className="py-24 relative overflow-hidden bg-batik-medium/20 batik-kawung-pattern">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-batik-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-batik-dark to-transparent z-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Organizations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <Card
              key={index}
              className={`batik-card h-full bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 batik-wave-pattern opacity-20 rounded-bl-full"></div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 rounded-md overflow-hidden border border-batik-accent/30 bg-batik-medium/30 flex items-center justify-center">
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-batik-light">{org.name}</CardTitle>
                    <p className="text-batik-accent">{org.role}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Badge variant="outline" className="bg-batik-accent/10 text-batik-accent border-batik-accent/30">
                    {org.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="text-batik-light/90">{org.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganizationSection

