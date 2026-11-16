
import { IconMail } from "@tabler/icons-react";
import { contactEmail } from "../contact.data";

export default function ContactEmail() {
  return (
    <div
      className="
        mx-auto mt-10 flex max-w-fit
        flex-col items-center justify-center
        gap-2 rounded-2xl border border-border
        bg-surface px-6 py-4
        sm:flex-row sm:gap-4
      "
    >
      <div className="flex items-center gap-2">
        <IconMail size={19} className="text-primary" />

        <span className="text-sm font-semibold text-text-primary">
          Fale com a gente
        </span>
      </div>

      <span className="hidden text-border sm:block">|</span>

      <a
        href={`mailto:${contactEmail}`}
        className="
          text-sm text-text-secondary
          transition-colors hover:text-primary
        "
      >
        {contactEmail}
      </a>
    </div>
  );
}
