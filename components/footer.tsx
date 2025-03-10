"use client"

import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <footer id="contact" className="py-24 relative overflow-hidden bg-batik-dark" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-batik-accent to-batik-gold"></div>
      <div className="absolute top-0 left-0 w-full h-full batik-parang-pattern opacity-5"></div>

      <div className="section-container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-batik-light font-playfair">Roni Antonius Sinabutar</h3>
            <p className="text-batik-light/80 mb-6 leading-relaxed">
              Software Developer & Data Scientist specializing in AI solutions and data-driven applications.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-batik-medium/20 text-batik-light hover:bg-batik-accent/20 hover:text-batik-accent"
              >
                <Github size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-batik-medium/20 text-batik-light hover:bg-batik-accent/20 hover:text-batik-accent"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-batik-medium/20 text-batik-light hover:bg-batik-accent/20 hover:text-batik-accent"
              >
                <Twitter size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-batik-medium/20 text-batik-light hover:bg-batik-accent/20 hover:text-batik-accent"
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-batik-light font-playfair">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-batik-light/80">
                <Mail className="h-5 w-5 text-batik-accent" />
                <span>roni.antonius@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-batik-light/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-batik-accent"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+62 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-batik-light/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-batik-accent"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-batik-light font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-batik-light/80 hover:text-batik-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-batik-accent rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-batik-light/80 hover:text-batik-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-batik-accent rounded-full"></span>
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-batik-light/80 hover:text-batik-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-batik-accent rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-batik-light/80 hover:text-batik-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-batik-accent rounded-full"></span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-batik-light/80 hover:text-batik-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-batik-accent rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="batik-divider mb-8 mx-auto max-w-md"></div>
          <p className="text-batik-light/60">
            © {new Date().getFullYear()} Roni Antonius Sinabutar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

