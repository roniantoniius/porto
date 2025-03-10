import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

const IntroSection = () => {
  return (
    <section id="intro" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Roni Antonius Sinabutar</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            Software Developer & Data Scientist
          </h2>
          <div className="batik-divider mb-6"></div>
          <p className="text-lg mb-6">
            I'm a software developer focused on solving digital problems. My expertise spans backend development, data
            science, and AI. I specialize in hypothesis testing, variable analysis, prediction, classification,
            recommendation systems, generative AI, and computer vision.
          </p>
          <p className="text-lg mb-6">
            Currently, I'm building applications powered by Generative AI using Le Chat (Mistral) and OpenAI to automate
            repetitive tasks and enhance productivity.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="gap-2">
              <Mail size={18} /> Contact Me
            </Button>
            <Button variant="outline" className="gap-2">
              <Download size={18} /> Download CV
            </Button>
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-primary/20 rounded-full -z-10 batik-float"></div>
            <div
              className="absolute inset-2 bg-primary/10 rounded-full -z-10 batik-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 batik-float"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Roni Antonius Sinabutar"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection

