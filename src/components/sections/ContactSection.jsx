import Input from "../common/Input";
import Button from "../common/Button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Contact Us
        </h2>

        <form className="mt-10 grid gap-6 max-w-xl mx-auto">
          <Input label="Name" placeholder="Your full name" />
          <Input label="Email" type="email" placeholder="Your email address" />
          <Input label="Message" placeholder="How can we help?" />

          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
