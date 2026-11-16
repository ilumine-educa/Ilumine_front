
import { contactOptions } from "../contact.data";
import ContactCard from "./contactCard";

export default function ContactOptions() {
  return (
    <div
      className="
        grid grid-cols-1 gap-5
        sm:grid-cols-2 lg:grid-cols-3
      "
    >
      {contactOptions.map((option) => (
        <ContactCard
          key={option.title}
          option={option}
        />
      ))}
    </div>
  );
}
