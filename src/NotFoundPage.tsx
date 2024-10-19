import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <AlertTriangle className="mx-auto h-24 w-24 text-yellow-500 mb-8" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
            404 - Page Not Found
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="/">
              <Button size="lg" className="mr-4">
                Back to Home
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}