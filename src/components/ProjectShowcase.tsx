export default function ProjectShowcase() {
    return (
      <section id="portfolio" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={`https://quixy.com/wp-content/uploads/2023/09/Project-management-tools.png`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600">A brief description of the project and the technologies used.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  