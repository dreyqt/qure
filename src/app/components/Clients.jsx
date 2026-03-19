import { Link } from 'react-router';

export function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-[#FF6B35]">1000+</span> Satisfied Clients
          </h2>
          <p className="text-gray-600 max-w-2xl">
            From hospitals to homes, restaurants to businesses, we provide
            quality and personalized pest management and disinfection.
          </p>
          <Link 
            to="/portfolio"
            className="inline-block mt-6 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors"
          >
            View Pestfolio
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-1">Montebello</div>
              <div className="text-xs text-gray-500">Villa Hotel</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Philippine</div>
              <div className="text-xs text-gray-500">Airlines</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">DEAN & DELUCA</div>
              <div className="text-xs text-gray-500">Gourmet Food</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg">
            <div className="w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold">City of</div>
                <div className="text-sm font-bold">Manila</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}