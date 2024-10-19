import TextSphere from "./TextSphere"; // Adjust path accordingly
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and performant websites using modern technologies.",
  },
  {
    title: "Mobile Development",
    description: "Crafting high-quality mobile applications for Android and iOS.",
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Our Services
        </h2>

        {/* Services Section and Sphere */}
        
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-around gap-6 lg:gap-20">
          {/* Services List */}
          <div>
          <div className="flex flex-col items-center gap-8 flex-1 text-center lg:text-left lg:items-start">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md flex flex-col justify-between"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  {service.description}
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={() => navigate('/services')} // Change '/services' to your actual page route
            >
              Explore All Services
            </button>
          </div>
          </div>

          {/* Text Sphere */}
          <div className="w-full flex justify-center lg:w-auto lg:justify-end">
            <TextSphere />
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Services;
