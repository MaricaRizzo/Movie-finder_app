export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">Movie Finder</p>
          <p className="text-sm text-gray-400">
            &copy; 2024 Movie Finder. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
