import { BASE } from "../utils/paths";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href={BASE}
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
