import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Share2, ChevronRight, Code, Palette, Rocket, BarChart, Users, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function ServicesPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

      <main className="flex-grow">
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Empowering your digital presence with cutting-edge solutions tailored to your needs.
            </p>
          </div>
        </section>

        <section id="website-development" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Website Development
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Create stunning, responsive websites that engage your audience and drive conversions.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Custom Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tailor-made websites built from the ground up to meet your specific business needs and goals.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Palette className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Responsive Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ensure your website looks great and functions flawlessly on all devices and screen sizes.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Rocket className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Performance Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Boost your website's speed and efficiency for improved user experience and search engine rankings.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="app-development" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                App Development
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Build powerful, user-friendly mobile applications for iOS and Android platforms.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Native App Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Create high-performance native apps for iOS and Android using Swift and Kotlin.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Laptop className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Cross-Platform Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Develop apps that work seamlessly across multiple platforms using React Native or Flutter.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>App Maintenance & Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ensure your app stays up-to-date with the latest features, security patches, and performance improvements.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="social-media-management" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Social Media Management
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Boost your online presence and engage with your audience across various social media platforms.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Share2 className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Content Creation & Curation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Develop engaging, platform-specific content that resonates with your target audience.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Analytics & Reporting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Track and analyze your social media performance to optimize your strategy and ROI.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Community Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Build and nurture your online community through active engagement and timely responses.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-8">Ready to elevate your digital presence?</h2>
            <Button size="lg" variant="outline" className="text-gray-900 hover:text-gray-700" onClick={() => navigate('/contact')}>
                Get in Touch
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}