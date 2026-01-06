const services = [
  {
    title: "Patient Records",
    description: "Securely manage patient medical histories and data.",
  },
  {
    title: "Appointments",
    description: "Schedule and manage visits with automated reminders.",
  },
  {
    title: "Medical Reports",
    description: "Generate and download detailed medical reports.",
  },
  {
    title: "Audit Logs",
    description: "Track system activity for accountability and compliance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
