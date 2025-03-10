"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const CertificationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const certifications = [
    {
      title: "Advanced Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      description:
        "Comprehensive specialization covering advanced machine learning techniques, deep learning, and natural language processing.",
    },
    {
      title: "AWS Certified Machine Learning Specialist",
      issuer: "Amazon Web Services",
      date: "2022",
      description:
        "Professional certification validating expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021",
      description:
        "Certification demonstrating proficiency in using TensorFlow to build and train neural network models for various applications.",
    },
    {
      title: "Professional Data Scientist",
      issuer: "DataCamp",
      date: "2020",
      description:
        "Certification covering data manipulation, visualization, machine learning, and statistical analysis using Python and R.",
    },
  ]

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-batik-dark">
      <div className="absolute top-0 left-0 w-full h-full batik-kawung-pattern opacity-10"></div>

      <div className="section-container relative z-20" ref={ref}>
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`batik-card bg-batik-dark/80 backdrop-blur-sm border-batik-accent/30 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-batik-accent to-batik-gold"></div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-batik-gold/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-batik-gold" />
                  </div>
                  <CardTitle className="text-xl font-bold text-batik-light">{cert.title}</CardTitle>
                </div>
                <div className="text-sm font-medium text-batik-accent ml-13">
                  {cert.issuer} | {cert.date}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="text-batik-light/90 mb-4">{cert.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 border-batik-accent/50 text-batik-light hover:bg-batik-accent/20"
                >
                  <ExternalLink size={16} /> View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection

