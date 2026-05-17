function Services() {
  const services = [
    "General Consultation",
    "Diabetes Care",
    "Blood Pressure Checkup",
    "Fever Treatment",
    "Health Advice",
    "Regular Checkups",
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {service}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Professional healthcare service with personalized attention and
                care.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
