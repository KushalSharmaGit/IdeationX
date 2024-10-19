import { useEffect } from "react";
import TagCloud from "TagCloud"; // Import the TagCloud library
import '../styles/TextShpere.css'; // Ensure this path is correct

const TextSphere: React.FC = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts: string[] = [
      "HTML", "CSS", "SASS", "JavaScript", "React", "Vue",
      "Nuxt", "NodeJS", "Babel", "JQuery", "ES6", "GIT", "GITHUB",
    ];

    // Function to calculate radius based on the viewport size
    const calculateRadius = (): number => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let radius;

      if (width < 640) {
        radius = Math.min(width, height) / 4; 
      } else if (width >= 640 && width < 1024) {
        radius = Math.min(width, height) / 3; 
      } else {
        const aspectRatio = width / height;
        radius = aspectRatio > 1.5 ? Math.min(width, height) / 3 : Math.min(width, height) / 4;
      }

      const minRadius = 100; 
      const maxRadius = 800; 

      return Math.max(minRadius, Math.min(radius, maxRadius)); 
    };

    // Use 'any' for the TagCloud options
    const options: any = {
      radius: calculateRadius(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    const tagCloudInstance = TagCloud(container, texts, options);

    const handleResize = (): void => {
      tagCloudInstance.destroy(); 
      const newOptions: any = {
        radius: calculateRadius(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, newOptions);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tagCloudInstance.destroy();
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
