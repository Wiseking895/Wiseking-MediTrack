import Button from "../common/Button";
import heroImage from "../../assets/images/hero-placeholder.png";
import heroVideo from "../../assets/videos/hero.mp4"; // import video

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-blue-50">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full">
        {/* Text */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Modern Healthcare <br />
            <span className="text-blue-400">Made Simple</span>
          </h1>

          <p className="mt-6 max-w-lg">
            Manage patients, appointments, and medical records securely
            with MediTrack — a complete digital healthcare solution.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Book Appointment</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Image (optional, can keep hero-placeholder for extra visual) */}
        <div>
          <img
            src={heroImage}
            alt="Healthcare professionals"
            className="rounded-xl shadow-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
