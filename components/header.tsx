"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-batik-dark/90 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-batik-accent flex items-center justify-center text-batik-dark font-bold text-xl">
              RS
            </div>
            <span className="font-playfair font-bold text-2xl text-batik-light">Roni Antonius Sinabutar</span>
          </div>

          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-batik-light">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          ) : (
            <nav className="flex items-center gap-8">
              <NavLinks />
            </nav>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-batik-dark/95 backdrop-blur-md border-t border-batik-accent/20 p-6 shadow-lg">
            <nav className="flex flex-col gap-6">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const NavLinks = () => {
  return (
    <>
      <a href="#hero" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Home
      </a>
      <a href="#experience" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Experience
      </a>
      <a href="#organizations" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Organizations
      </a>
      <a href="#projects" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Projects
      </a>
      <a href="#skills" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Skills
      </a>
      <a href="#contact" className="text-batik-light hover:text-batik-accent transition-colors font-medium">
        Contact
      </a>
    </>
  )
}

export default Header

