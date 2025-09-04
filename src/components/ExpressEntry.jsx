const ExpressEntry = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Canada's Express Entry System
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Canada's Express Entry system is a game-changer for economic immigration. It revolutionizes 
              the way we attract skilled immigrants and gets them working in Canada faster.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Federal Skilled Worker Program</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Federal Skilled Trades Program</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Canadian Experience Class</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Express Entry Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Fast processing times (6 months or less)</li>
              <li>• No job offer required for some programs</li>
              <li>• Comprehensive ranking system</li>
              <li>• Provincial nomination opportunities</li>
              <li>• Pathway to permanent residence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressEntry;
