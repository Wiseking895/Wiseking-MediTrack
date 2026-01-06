import footerVideo from "../../assets/videos/footer-bg.mp4"; // correct path

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 text-gray-300">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-contain"
        src={footerVideo}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Original footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">MediTrack</h3>
          <p className="text-sm">
            Secure, modern healthcare management for clinics and hospitals.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Patient Records</li>
            <li>Appointments</li>
            <li>Medical Reports</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@wiseking.com</li>
            <li>Phone: +233 59 123 4567</li>
            <li>Location: Ghana</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} MediTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
