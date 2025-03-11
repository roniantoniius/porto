"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const projects = [
    {
      title: "Fisherman App's Jejak Laut",
      description: "Engineered a cross-platform maritime management solution that enhanced fishing operation efficiency by 25% through AI-powered note refinement and integrated location mapping, while providing 90% reduction in data security risks with advanced encryption protocols.",
      image: "/jejak laut horiz.jpeg",
      tags: ["React Native", "OpenAI", "Docker", "Cross-Platform", "Location Mapping", "Data Encryption"],
      demoUrl: "https://github.com/roniantoniius/jejak-laut",
      codeUrl: "https://github.com/roniantoniius/jejak-laut",
    },
    {
      title: "Smart Shopper Profiling System",
      description: "Implemented an advanced shopper profiling solution utilizing Associate Rule Mining that enhanced product recommendations by 25% and improved store layout efficiency by 20%, while delivering a 40% increase in system adaptability through scalable API integration.",
      image: "/smart1.jpeg",
      tags: ["Data Science", "Associate Rule Mining", "API Development", "Sales Analytics", "Product Recommendation"],
      demoUrl: "https://github.com/roniantoniius/Smart-Shopper-Profiling-System-Using-RFM-T",
      codeUrl: "https://github.com/roniantoniius/Smart-Shopper-Profiling-System-Using-RFM-T",
    },
    {
      title: "Network Security Anomaly Detection",
      description: "Deployed a machine learning-powered network security system achieving 93% accuracy with 30% reduced false positives, implementing real-time monitoring API and dynamic thresholding techniques that mitigated vulnerability risks by 25% on high-traffic ports.",
      image: "/network.png",
      tags: ["Machine Learning", "Network Security", "RESTful API", "Visualization", "Real-time Monitoring", "Anomaly Detection"],
      demoUrl: "https://github.com/roniantoniius/Enhancing-Network-Security-through-Anomaly-Detection",
      codeUrl: "https://github.com/roniantoniius/Enhancing-Network-Security-through-Anomaly-Detection",
    },
    {
      title: "Climate Dashboard",
      description: "Delivered enterprise-grade climate visualization dashboards with Flask and React, achieving 98% data accuracy rate and 20% improvement in managerial decision-making efficiency through strategic data representation and daily automated updates.",
      image: "/dashboard_bmkg_1.jpeg",
      tags: ["Flask", "React", "Data Visualization", "Dashboard Development", "Data Analytics", "Data Governance"],
      demoUrl: "https://github.com/roniantoniius/Stamar",
      codeUrl: "https://github.com/roniantoniius/Stamar",
    },
    {
      title: "Warung Omega E-Commerce",
      description: "Spearheaded digital transformation of a traditional business through comprehensive ERP implementation, resulting in 90%+ payment gateway success rate and significant operational efficiency gains through restful API architecture and cloud-based server optimization.",
      image: "/warung omega.jpeg",
      tags: ["ERP", "E-Commerce", "Payment Gateway", "Cloud Hosting", "RESTful API", "System Architecture"],
      demoUrl: "https://github.com/roniantoniius/Warung-Omega-Ecommerce",
      codeUrl: "https://github.com/roniantoniius/Warung-Omega-Ecommerce",
    },
    {
      title: "Seafood Chatbot Recommender System",
      description: "Developed an AI-powered conversational shopping assistant that increased user engagement by 30% and delivered personalized seafood recommendations with 81% preference-matching accuracy, enhancing overall customer satisfaction by 25%.",
      image: "/chatbot.jpg",
      tags: ["Chatbot", "AI", "Recommendation System", "NLP", "Personalization", "User Experience"],
      demoUrl: "https://github.com/roniantoniius/AI-Chatbot-and-Recommendation-System-for-Manettas",
      codeUrl: "https://github.com/roniantoniius/AI-Chatbot-and-Recommendation-System-for-Manettas",
    },
    {
      title: "Employee Resignation Analysis",
      description: "Executed causal inference analysis on employee turnover factors, resulting in targeted retention interventions that reduced resignation rates by 15% and improved resource allocation efficiency by 20% through heterogeneity-based strategy optimization.",
      image: "/employee_resign_causal.jpeg",
      tags: ["Causal Inference", "Predictive Modeling", "HR Analytics", "Statistical Analysis", "Data Visualization"],
      demoUrl: "https://github.com/roniantoniius/Causal-Inference-Interpretation-for-Employee-Resignation",
      codeUrl: "https://github.com/roniantoniius/Causal-Inference-Interpretation-for-Employee-Resignation",
    },
    {
      title: "Tangan Laut: Marine Debris Donation Platform",
      description: "Architected an end-to-end donation SaaS platform for marine conservation with secure payment gateway integration, comprehensive technical documentation, and cloud deployment, enabling measurable environmental impact through streamlined contribution processing.",
      image: "/tangan laut.jpeg",
      tags: ["Django", "SaaS", "Payment Integration", "UI/UX Design", "Technical Documentation", "Environmental Sustainability"],
      demoUrl: "https://github.com/roniantoniius/Tangan-Laut-Website-With-Django-and-Payment-Gateaway",
      codeUrl: "https://github.com/roniantoniius/Tangan-Laut-Website-With-Django-and-Payment-Gateaway",
    }
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-batik-dark">
      <div className="absolute top-0 left-0 w-full h-full batik-wind-pattern opacity-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Projects</h2>

        {/* Fixed horizontal scrolling container with consistent card sizes */}
        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory gap-6 scrollbar-thin scrollbar-thumb-batik-accent/40 scrollbar-track-transparent">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`batik-card flex-shrink-0 snap-center overflow-hidden flex flex-col bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 w-full sm:w-[350px] md:w-[380px] max-w-md ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                height: "500px" // Fixed height for all cards
              }}
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
                <CardTitle className="text-xl font-bold text-batik-light truncate">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow overflow-y-auto">
                <p className="mb-4 text-batik-light/90 line-clamp-3">{project.description}</p>
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

              <CardFooter className="flex gap-3 pt-2 mt-auto">
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1 border-batik-accent/50 text-batik-light hover:bg-batik-accent/20"
                  >
                    <ExternalLink size={16} /> Demo
                  </Button>
                </Link>
                <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1 border-batik-accent/50 text-batik-light hover:bg-batik-accent/20"
                  >
                    <Code size={16} /> Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection