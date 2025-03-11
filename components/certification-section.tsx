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
      title: "Java Programming II",
      issuer: "University of Helsinki’s",
      date: "2025",
      description:
        "Focuses on core Java fundamentals such as object-oriented design, exception handling, JavaFX for GUI development, and basic network programming.",
    },
    {
      title: "Data Engineering Specialization",
      issuer: "IBM",
      date: "2024",
      description:
        "Hands-on experience in data warehousing and ETL processes using big data tools like Apache Spark, Hadoop, and workflow automation with Apache Airflow.",
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2024",
      description:
        "Develops expertise in data cleaning, analysis, and visualization using Google tools including Google Sheets, Google Data Studio, and BigQuery.",
    },
    {
      title: "Google Business Intelligence Professional",
      issuer: "Google",
      date: "2024",
      description:
        "Covers advanced data modeling, reporting, and visualization techniques with BI tools such as Google Data Studio, Looker, and BigQuery to drive business insights.",
    },
    {
      title: "Applied Generative AI and Natural Language Professional",
      issuer: "Udemy",
      date: "2024",
      description:
        "Focuses on practical applications of generative AI and NLP through hands-on projects using transformer models and frameworks like TensorFlow, PyTorch, and Hugging Face.",
    },
    {
      title: "Magang dan Studi Independen Bersertifikat 6: Cepat Cakap Data Scientist",
      issuer: "Kementerian Pendidikan dan Kebudayaan",
      date: "2024",
      description:
        "Accelerates data science proficiency by learn Python programming, statistics, data visualization with Matplotlib and Seaborn, and machine learning with Scikit-Learn and TensorFlow.",
    },
    {
      title: "Scholarship on Machine Learning Expert",
      issuer: "Development of Bank Singapore",
      date: "2024",
      description:
        "Provides advanced training in machine learning techniques—from traditional algorithms to deep learning—using frameworks such as TensorFlow and PyTorch.",
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
                  onClick={() => window.open('https://www.linkedin.com/in/aantoniusron/details/certifications', '_blank')}
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

