import ContactOptions from "@/src/components/landing-page/contato/components/contactOptions";
import ContactEmail from "@/src/components/landing-page/contato/components/contactEmail";
import CallToAction from "@/src/components/reusable/cta/callToAction";
import Hero from "@/src/components/reusable/hero";

export default function contatoPage() {
  return (
    <>
      <Hero
        title="Vamos conversar?"
        description="Tem alguma dúvida, sugestão ou quer conhecer melhor o Ilumine? Será um prazer conversar com você."
        align="center"
      />
      <section
        id="contato"
        className="
        relative isolate overflow-hidden
        bg-background px-4 pb-20 pt-28
        sm:px-6 sm:py-28 lg:px-12
      "
      >
        <div className="mx-auto max-w-7xl">
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
    </>
  );
}
