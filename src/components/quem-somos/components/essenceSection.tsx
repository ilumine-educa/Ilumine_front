import SectionHeader from "../../reusable/sectionHeader";

export default function EssenceSection() {
  return (
    <section
      id="sobre"
      className="bg-surface px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <SectionHeader
            label="Nossa essência"
            title="A diferença não está na criança."
            highlight="Está em como ensinamos."
            align="left"
            spacing={false}
            />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              Durante muito tempo, a educação foi pensada
              a partir de um modelo único de aprendizagem.
              Mas as crianças não são iguais, e suas
              necessidades também não.
            </p>

            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              Acreditamos que a tecnologia pode ajudar
              a transformar essa realidade, aproximando
              educação e inclusão para construir
              experiências mais significativas.
            </p>

            <p className="text-base font-semibold leading-relaxed text-primary sm:text-lg">
              Porque aprender não deveria ser uma
              experiência limitada a um único caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
