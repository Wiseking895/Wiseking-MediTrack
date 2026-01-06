import doctor1 from "../../assets/images/doctor1.png";
import doctor2 from "../../assets/images/doctor2.png";
import doctor3 from "../../assets/images/doctor3.png";
import nurse1 from "../../assets/images/nurse1.png";
import nurse2 from "../../assets/images/nurse2.png";
import nurse3 from "../../assets/images/nurse3.png";

const team = [
  { name: "Dr. John Smith", role: "Cardiologist", image: doctor1 },
  { name: "Dr. Kofi Mensah", role: "General Practitioner", image: doctor2 },
  { name: "Dr. Lee Wong", role: "Pediatrician", image: doctor3 },
  { name: "Nurse Sarah", role: "Registered Nurse", image: nurse1 },
  { name: "Nurse Daniella", role: "Clinical Nurse", image: nurse2 },
  { name: "Nurse Agyemang", role: "Senior Nurse", image: nurse3 },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Medical Team
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-fit"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
