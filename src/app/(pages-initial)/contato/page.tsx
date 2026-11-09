import { IconSparkles } from "@tabler/icons-react";

import SectionHeader from "@/src/components/reusable/sectionHeader";

import ContactDecorations from "@/src/components/contato/components/contactDecorations";
import ContactOptions from "@/src/components/contato/components/contactOptions";
import ContactEmail from "@/src/components/contato/components/contactEmail";
import CallToAction from "@/src/components/reusable/cta/callToAction";

export default function contatoPage() {
  return (
    <section
      id="contato"
      className="
        relative isolate overflow-hidden
        bg-background px-4 py-20
        sm:px-6 sm:py-28 lg:px-12
      "
    >
      {/* Decorações */}
      <ContactDecorations />

      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <SectionHeader
          label="Estamos aqui para ajudar"
          title="Vamos conversar?"
          description="Tem alguma dúvida, sugestão ou quer conhecer melhor o Ilumine? Será um prazer conversar com você."
          icon={<IconSparkles size={16} />}
          className="mx-auto"
        />

        {/* Opções de contato */}
        <ContactOptions />

        {/* E-mail */}
        <ContactEmail />

        {/* Redes sociais */}
        <CallToAction
          size="compact"
          layout="horizontal"
          title="Acompanhe o Ilumine"
          highlight="nas redes sociais!"
          description="Fique por dentro das novidades, dos projetos e de tudo que estamos construindo para transformar a aprendizagem."
          primaryAction={{
            label: "Instagram",
            href: "https://www.instagram.com/SEU_USUARIO/",
          }}
          secondaryAction={{
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/SEU_USUARIO/",
          }}
          className="mt-20"
        />
      </div>
    </section>
  );
}
