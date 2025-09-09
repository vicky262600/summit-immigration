const ServiceCategories = () => {
  const categories = [
    {
      title: "TEMPORARY RESIDENCE",
      description: "Work permits, study permits, visitor visas, and temporary resident permits for short-term stays in Canada.",
      icon: "🕒",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900"
    },
    {
      title: "PERMANENT RESIDENCE", 
      description: "Express Entry, Provincial Nominee Programs, family sponsorship, and other pathways to permanent residency.",
      icon: "🏠",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    },
    {
      title: "INTERNATIONAL RECRUITMENT",
      description: "Global talent stream, international mobility programs, and specialized recruitment solutions for employers.",
      icon: "🌍",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Service Categories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your specific needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl text-white">{category.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${category.textColor} text-center group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
