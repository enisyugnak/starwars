import IconButton from "@/ui/button/button-icon";
import ContactForm from "@/ui/contact-form";

const ContactView = () => {
  return (
    <div className="ml-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="">
        <span className="font-black">
          I’m a
          <span className="ml-1 text-xl text-white">frontend developer</span>
        </span>
        <br />
        <span className="font-black">
          specializing in modern web technologies like,
        </span>
        <div className="py-6 text-4xl font-black text-sky-400">
          Next.js and Tailwind CSS
        </div>
        <div>
          I build{" "}
          <span className="font-black text-white">
            fast, responsive, and scalable applications{" "}
          </span>
          with clean, maintainable code. <br />
          Always exploring new technologies, I focus on creating{" "}
          <span className="font-black text-white">
            smooth user experiences.
          </span>
          <br />I also work with databases, apis and backend integrations when
          needed.
        </div>
        <div className="flex flex-wrap gap-1 py-6 lg:gap-3">
          <IconButton icon="react" tooltip="React" />
          <IconButton icon="next" tooltip="NextJS" />
          <IconButton icon="tailwind" tooltip="Tailwind CSS" />
          <IconButton icon="firebase" tooltip="Firebase" />
          <IconButton icon="supabase" tooltip="Supabase" />
          <IconButton icon="pos" tooltip="PostgreSQL" />
          <IconButton icon="js" tooltip="JavaScript" />
          <IconButton icon="ts" tooltip="TypeScript" />
          <IconButton icon="gas" tooltip="Google Apps Script" />
        </div>
        <div className="">
          If you need any assistance, support, or collaboration, feel free to
          <span className="text-sky-400"> contact me!</span>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactView;
