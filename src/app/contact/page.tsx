import ContactForm from "@/components/form";

export default async function Contact() {
  return (
    <div className="mt-5 flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold text-[#EEEEEE]">Contact Form</h1>
      <ContactForm />
    </div>
  );
}
