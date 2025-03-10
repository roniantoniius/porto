import { Suspense } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import OrganizationSection from "@/components/organization-section"
import ProjectSection from "@/components/project-section"
import AchievementSection from "@/components/achievement-section"
import CertificationSection from "@/components/certification-section"
import SkillSection from "@/components/skill-section"
import Footer from "@/components/footer"
import BatikBackground from "@/components/batik-background"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingSpinner from "@/components/loading-spinner"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-batik-dark text-batik-light">
      <BatikBackground />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <ExperienceSection />
        <OrganizationSection />
        <ProjectSection />
        <AchievementSection />
        <CertificationSection />
        <SkillSection />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </main>
  )
}

