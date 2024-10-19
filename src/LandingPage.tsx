import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import ProjectShowcase from "./components/ProjectShowcase"

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </div>
  )
}
