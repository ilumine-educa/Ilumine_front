import CallToAction from "../../../reusable/cta/callToAction";
import CallToActionDecoration from "./components/CallToActionDecoration";

import styles from "./CallToActionSection.module.css";

export default function CallToActionSection() {
  return (
    <section
      id="comece"
      className="
      relative isolate w-full
        overflow-hidden
        bg-background py-8 sm:py-10 lg:py-12
      "
    >
      <CallToActionDecoration />
      <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-12 min-[1921px]:max-w-[min(83.333vw,133.333rem)] min-[1921px]:px-[min(2.5vw,4rem)]">
        <CallToAction
          className={styles.panel}
          title="Toda criança tem um potencial único."
          highlight="Vamos iluminar esse caminho?"
          description="
            Descubra como o Ilumine pode tornar a aprendizagem
            mais personalizada, interativa e inclusiva.
          "
          primaryAction={{
            label: "Começar agora",
            href: "/auth/cadastro",
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
