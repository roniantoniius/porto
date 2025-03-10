"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink, Folder } from "lucide-react"

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const projects = [
    {
      title: "AI-Powered Task Automation",
      description: "A system that uses Mistral AI to automate repetitive business tasks, reducing manual work by 70%.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Mistral AI", "Python", "FastAPI", "React"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description:
        "Interactive dashboard for business intelligence with predictive capabilities using machine learning models.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "TensorFlow", "D3.js", "Flask"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Computer Vision for Quality Control",
      description:
        "Automated quality control system using computer vision to detect defects in manufacturing processes.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["OpenCV", "PyTorch", "Docker", "React"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-batik-dark">
      <div className="absolute top-0 left-0 w-full h-full batik-wind-pattern opacity-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`batik-card overflow-hidden flex flex-col h-full bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-batik-dark to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-batik-accent/80 text-batik-dark">
                    <Folder className="h-3 w-3 mr-1" /> Project
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-batik-light">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="mb-4 text-batik-light/90">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-batik-medium/30 text-batik-light border-batik-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-1 border-batik-accent/50 text-batik-light hover:bg-batik-accent/20"
                >
                  <ExternalLink size={16} /> Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-1 border-batik-accent/50 text-batik-light hover:bg-batik-accent/20"
                >
                  <Code size={16} /> Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

