"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useInView } from "react-intersection-observer"

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const batikPatternRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!batikPatternRef.current) return

      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      batikPatternRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 relative overflow-hidden" ref={ref}>
      {/* Oversized Batik Pattern */}
      <div
        ref={batikPatternRef}
        className="absolute -right-64 top-1/4 w-[800px] h-[800px] opacity-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0C50 0 50 50 100 50C150 50 150 0 200 0C250 0 250 50 300 50M0 50C50 50 50 100 100 100C150 100 150 50 200 50C250 50 250 100 300 100M0 100C50 100 50 150 100 150C150 150 150 100 200 100C250 100 250 150 300 150M0 150C50 150 50 200 100 200C150 200 150 150 200 150C250 150 250 200 300 200' stroke='%23D4A76A' strokeWidth='3' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-batik-light">
                Roni Antonius <span className="text-batik-accent">Sinabutar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-batik-accent/80">
                Software Developer & Data Scientist
              </h2>
              <div className="batik-divider w-32 my-6"></div>
            </div>

            <p className="text-lg text-batik-light/90 leading-relaxed">
            I am a dedicated Marine Information Systems student at Universitas Pendidikan Indonesia, passionate about leveraging technology to address complex challenges. My expertise encompasses backend development, data science, and artificial intelligence, enabling me to contribute innovative solutions that enhance operations and sustainability.
            </p>

            <p className="text-lg text-batik-light/90 leading-relaxed">
              Currently, I'm building applications powered by Generative AI (Mistral, OpenAI) to
              automate repetitive tasks and enhance productivity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-batik-medium hover:bg-batik-medium/80 text-batik-light gap-2 rounded-full px-6 border border-batik-accent/30"
              >
                <Mail size={18} /> Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-batik-accent text-batik-light hover:bg-batik-accent/20 gap-2 rounded-full px-6"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'resume.pdf';
                  link.download = 'Roni Antonius Sinabutar.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={18} /> Download CV
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-batik-light hover:text-batik-accent hover:bg-batik-accent/10 rounded-full"
                onClick={() => window.open('https://github.com/roniantoniius', '_blank')}
              >
                <Github />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-batik-light hover:text-batik-accent hover:bg-batik-accent/10 rounded-full"
                onClick={() => window.open('https://www.linkedin.com/in/aantoniusron/', '_blank')}
              >
                <Linkedin />
              </Button>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-batik-accent/30 rounded-full animate-spin-slow"></div>
              <div
                className="absolute -inset-8 border border-batik-accent/20 rounded-full animate-spin-slow"
                style={{ animationDuration: "15s" }}
              ></div>

              {/* Batik frame */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-batik-accent to-batik-gold">
                <div className="absolute inset-0 rounded-full batik-wave-pattern opacity-30"></div>

                {/* Profile image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-batik-dark">
                  <Image
                    src="/foto.png?height=400&width=400"
                    alt="Roni Antonius Sinabutar"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-batik-gold/30 animate-float"></div>
                <div
                  className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-batik-accent/20 animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-batik-accent/80 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-batik-accent/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-batik-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

