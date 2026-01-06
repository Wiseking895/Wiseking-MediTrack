import Button from "../common/Button";

const AppointmentsSection = () => {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Book an Appointment Today
        </h2>

        <p className="mt-4 text-blue-100">
          Easy scheduling with trusted healthcare professionals.
        </p>

        <div className="mt-8">
          <Button variant="secondary">Schedule Now</Button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsSection;
