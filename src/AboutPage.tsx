import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Share2, ChevronRight, Users, Lightbulb, Target, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
      <main className="flex-grow">
        <section id="about" className="bg-blue-600 text-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              About IdeationX
            </h1>
            <p className="mt-6 max-w-3xl text-xl">
              IdeationX is a forward-thinking digital agency specializing in website development, app creation, and social media management. Our mission is to empower businesses with cutting-edge digital solutions that drive growth and success in the ever-evolving online landscape.
            </p>
            <Button size="lg" className="mt-8" onClick={() => navigate('/services')}>
              Learn More About Our Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="values" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We constantly push the boundaries of technology to deliver innovative solutions that set our clients apart.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in the power of teamwork and foster a collaborative environment with our clients and within our team.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for excellence in every project, ensuring the highest quality in our deliverables and client satisfaction.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Adaptability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    In the fast-paced digital world, we stay agile and adapt quickly to new technologies and market trends.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300&text=Jane" },
                { name: "John Smith", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300&text=John" },
                { name: "Emily Brown", role: "UX/UI Designer", image: "/placeholder.svg?height=300&width=300&text=Emily" },
                { name: "Michael Lee", role: "Mobile App Specialist", image: "/placeholder.svg?height=300&width=300&text=Michael" },
                { name: "Sarah Johnson", role: "Social Media Strategist", image: "/placeholder.svg?height=300&width=300&text=Sarah" },
                { name: "David Wilson", role: "Project Manager", image: "/placeholder.svg?height=300&width=300&text=David" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-8">Ready to bring your digital ideas to life?</h2>
            <Button size="lg" variant="outline" className="text-gray-900 hover:text-gray-700" onClick={() => navigate('/contact')}>
            Get In Touch
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}