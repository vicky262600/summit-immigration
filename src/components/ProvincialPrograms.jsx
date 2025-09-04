const ProvincialPrograms = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Provincial Nominee Programs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nova Scotia PNP</h3>
            <p className="text-gray-600 mb-4">
              The Regional Labour Market Demand Stream allows individuals to apply without a job offer 
              in high-demand occupations.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Eligible Occupations:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Systems Testing Technicians</li>
                <li>• Industrial Engineering Technologists</li>
                <li>• Registered Nurses</li>
                <li>• Head Nurses and Supervisors</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Provincial Programs</h3>
            <p className="text-gray-600 mb-4">
              Each Canadian province has unique immigration programs tailored to their specific 
              economic and demographic needs.
            </p>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Ontario Immigrant Nominee Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>British Columbia PNP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Alberta Immigrant Nominee Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Manitoba Provincial Nominee Program</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvincialPrograms;
