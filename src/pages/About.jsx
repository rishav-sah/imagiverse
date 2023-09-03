
const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Our ImagiVerse Stock Photography Website</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our ImagiVerse Web Application! I'm excited to share my journey of learning React Js Concepts with you and provide a platform where you can explore high-quality photos.
        </p>
        <p className="text-gray-700 mb-4">
          The goal is to create a responsive user-friendly experience that mirrors the elegance and simplicity of Unsplash while sharpening my React skills along the way and scale it further using advance concepts.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 ml-4 mb-6">
          <li>Explore a vast collection of beautiful, free-to-use photos.</li>
          <li>Search for specific photos.</li>
          <li>Download, and interact with photos and photographers.</li>
        </ul>
        <p className="font-medium text-gray-700">
          Huge Shout-out to Unsplash providing its free API which will immensely help the developers to experience the production level API.
        </p>
      </div>
    </div>
  );
};

export default About;