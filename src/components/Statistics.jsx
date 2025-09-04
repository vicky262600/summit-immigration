const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Canada's Immigration Opportunity
          </h2>
          <p className="text-xl text-gray-600">
            Canada is expecting approximately four million new immigrants between 2019 and 2035
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-900 mb-2">4M+</div>
            <div className="text-lg text-gray-700">New Immigrants Expected</div>
            <div className="text-sm text-gray-600 mt-2">2019-2035</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-900 mb-2">450K</div>
            <div className="text-lg text-gray-700">International Students</div>
            <div className="text-sm text-gray-600 mt-2">Target by 2022</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-4xl font-bold text-purple-900 mb-2">#14</div>
            <div className="text-lg text-gray-700">Best Country to Retire</div>
            <div className="text-sm text-gray-600 mt-2">Global Retirement Index</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
