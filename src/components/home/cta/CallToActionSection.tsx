import CallToAction from "../../reusable/callToAction";
import CallToActionDecoration from "./components/CallToActionDecoration";

export default function CallToActionSection() {
  return (
    <section
      id="comece"
      className="
      relative isolate w-full
        overflow-hidden
        bg-background px-4 py-20
        sm:px-6 sm:py-28 lg:px-12
      "
    >
      <CallToActionDecoration />
      <div className="mx-auto max-w-7xl">
        <CallToAction
          title="Toda criança tem um potencial único."
          highlight="Vamos iluminar esse caminho?"
          description="
            Descubra como o Ilumine pode tornar a aprendizagem
            mais personalizada, interativa e inclusiva.
          "
          primaryAction={{
            label: "Começar agora",
            href: "/cadastro",
          }}
          secondaryAction={{
            label: "Conhecer a solução",
            href: "/#solucao",
          }}
        />
      </div>
    </section>
  );
}
