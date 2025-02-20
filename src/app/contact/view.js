import ContactForm from "@/ui/contact-form";

const ContactView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <span className="text-lg">I have known as</span>
        <br />
        <span className="text-4xl font-black text-white"> SelfLearner</span>
        <br />I am a Frontend and Google Apps Developer.
        <br />
        If you have any thougths about this site or <br />
        you want to hire me as a developer <br />
        please contact me...
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactView;
