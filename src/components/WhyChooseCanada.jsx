const WhyChooseCanada = () => {
  const benefits = [
    {
      emoji: "🇨🇦",
      title: "Universal Healthcare",
      description: "Free healthcare coverage for all permanent residents",
      bgColor: "bg-blue-200",
      textColor: "text-blue-800"
    },
    {
      emoji: "🎓",
      title: "Quality Education",
      description: "World-class education system for children",
      bgColor: "bg-green-200",
      textColor: "text-green-800"
    },
    {
      emoji: "💼",
      title: "Job Opportunities",
      description: "Strong economy with diverse employment options",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      emoji: "🏠",
      title: "Safe Environment",
      description: "One of the safest countries in the world",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Canada for Immigration?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${benefit.textColor} text-2xl`}>{benefit.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-800">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCanada;
