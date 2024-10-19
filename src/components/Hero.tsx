import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Bringing Your Digital Ideas to Life
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl">
          We specialize in website development, app creation, and social media management to help your business thrive in the digital world.
        </p>
        <div className="mt-10">
          <Button size="lg" className="mr-4" onClick={() => navigate('/services')}>
            Explore Our Services
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-gray-900 hover:text-gray-700" onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
