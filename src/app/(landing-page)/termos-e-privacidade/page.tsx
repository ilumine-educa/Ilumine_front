import Link from "next/link";

import {
  IconShieldCheck,
  IconFileDescription,
  IconLock,
  IconUsers,
  IconHeartHandshake,
  IconArrowUpRight,
  IconChevronRight,
} from "@tabler/icons-react";

import SectionHeader from "@/src/components/reusable/sectionHeader";
import PolicyCard from "@/src/components/reusable/card/policyCard";
import SectionNavigation from "@/src/components/reusable/sectionNavigation";
import CallToAction from "@/src/components/reusable/cta/callToAction";

const navigationItems = [
  { label: "Termos de Uso", href: "#termos" },
  { label: "Política de Privacidade", href: "#privacidade" },
  { label: "Dados de crianças", href: "#dados" },
  { label: "Proteção de dados", href: "#protecao" },
  { label: "Seus direitos", href: "#direitos" },
];

export default function termosUsoPrivacidadePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl pb-16 pt-28 px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Cabeçalho */}
        <header className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="Termos de Uso e"
            highlight="Política de Privacidade"
            description="Queremos que você saiba como o Ilumine funciona, quais são nossas responsabilidades e como tratamos as informações utilizadas em nossa plataforma."
            spacing={false}
          />

          <p className="mt-5 text-xs text-text-secondary">
            Última atualização: 08 de novembro de 2026
          </p>
        </header>

        {/* Navegação */}
        <div className="mx-auto mt-12 max-w-4xl">
          <SectionNavigation
            title="Nesta página"
            items={navigationItems}
            className="flex flex-col flex-wrap justify-center gap-2"
          />
        </div>

        {/* Introdução */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <IconHeartHandshake size={24} />
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                Nosso compromisso
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                O Ilumine Educa nasceu com o propósito de tornar a aprendizagem
                mais inclusiva e acessível. Por isso, acreditamos que a
                transparência, o respeito e a proteção das informações fazem
                parte de uma educação responsável.
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo dos documentos */}
        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          {/* 01 - Termos de Uso */}
          <PolicyCard
            id="termos"
            number="01 — CONDIÇÕES DE UTILIZAÇÃO"
            title="Termos de Uso"
            description="Conheça as condições para utilizar os serviços e recursos disponibilizados pelo Ilumine Educa."
            icon={<IconFileDescription size={26} />}
            items={[
              {
                title: "1.1. Sobre o Ilumine Educa",
                content: (
                  <>
                    <p>
                      O Ilumine Educa é um projeto em desenvolvimento voltado à
                      alfabetização inclusiva, com foco em diferentes formas e
                      ritmos de aprendizagem.
                    </p>
                    <p>
                      A plataforma tem como objetivo oferecer recursos e
                      experiências educacionais que auxiliem crianças,
                      familiares e educadores no processo de aprendizagem.
                    </p>
                  </>
                ),
              },
              {
                title: "1.2. Aceitação dos termos",
                content: (
                  <>
                    <p>
                      Ao acessar ou utilizar a plataforma, o usuário declara
                      estar ciente das condições apresentadas neste documento.
                    </p>
                    <p>
                      Caso não concorde com alguma disposição, deverá
                      interromper a utilização dos serviços.
                    </p>
                  </>
                ),
              },
              {
                title: "1.3. Utilização da plataforma",
                content: (
                  <>
                    <p>
                      O usuário compromete-se a utilizar os recursos
                      disponibilizados de maneira adequada, respeitando a
                      legislação vigente e os direitos de terceiros.
                    </p>
                    <p>
                      Não é permitido utilizar a plataforma para atividades
                      ilícitas, tentar comprometer sua segurança ou prejudicar
                      seu funcionamento.
                    </p>
                  </>
                ),
              },
              {
                title: "1.4. Responsabilidades",
                content: (
                  <>
                    <p>
                      O Ilumine busca disponibilizar conteúdos e ferramentas
                      educacionais de forma responsável. Entretanto, os recursos
                      da plataforma não substituem o acompanhamento pedagógico,
                      profissional ou especializado.
                    </p>
                    <p>
                      Pais, responsáveis e educadores devem acompanhar a
                      utilização dos recursos por crianças.
                    </p>
                  </>
                ),
              },
              {
                title: "1.5. Propriedade intelectual",
                content: (
                  <>
                    <p>
                      Os elementos da plataforma, incluindo identidade visual,
                      textos, ilustrações, interfaces e materiais originais, são
                      protegidos pela legislação aplicável de propriedade
                      intelectual.
                    </p>
                    <p>
                      Sua reprodução ou utilização comercial sem autorização dos
                      respectivos titulares não é permitida.
                    </p>
                  </>
                ),
              },
              {
                title: "1.6. Alterações nos serviços",
                content: (
                  <p>
                    Os recursos, funcionalidades e conteúdos poderão ser
                    atualizados, modificados ou descontinuados conforme a
                    evolução do projeto.
                  </p>
                ),
              },
            ]}
          />

          {/* 02 - Política de Privacidade */}
          <PolicyCard
            id="privacidade"
            number="02 — TRANSPARÊNCIA NO TRATAMENTO DE DADOS"
            title="Política de Privacidade"
            description="Entenda como as informações pessoais podem ser tratadas durante a utilização da plataforma."
            icon={<IconLock size={26} />}
            items={[
              {
                title: "2.1. Nosso compromisso com a privacidade",
                content: (
                  <>
                    <p>
                      O Ilumine Educa valoriza a privacidade dos usuários e
                      busca tratar informações pessoais de maneira transparente,
                      responsável e segura.
                    </p>
                    <p>
                      O tratamento de dados pessoais deverá observar a Lei Geral
                      de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
                    </p>
                  </>
                ),
              },
              {
                title: "2.2. Quais informações podem ser coletadas?",
                content: (
                  <>
                    <p>
                      Dependendo das funcionalidades disponibilizadas, poderão
                      ser tratadas informações como:
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        Dados de cadastro, como nome e endereço de e-mail.
                      </li>
                      <li>
                        Informações necessárias para autenticação e segurança da
                        conta.
                      </li>
                      <li>
                        Dados relacionados à utilização dos recursos
                        educacionais.
                      </li>
                      <li>
                        Informações técnicas, como tipo de dispositivo e
                        registros de acesso, quando aplicável.
                      </li>
                      <li>
                        Informações fornecidas voluntariamente em formulários ou
                        canais de contato.
                      </li>
                    </ul>
                    <p>
                      A coleta dependerá das funcionalidades efetivamente
                      utilizadas. O projeto deverá limitar o tratamento às
                      informações necessárias para suas finalidades.
                    </p>
                  </>
                ),
              },
              {
                title: "2.3. Como utilizamos as informações?",
                content: (
                  <>
                    <p>
                      Quando aplicável, os dados poderão ser utilizados para:
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>Permitir o acesso e funcionamento da plataforma.</li>
                      <li>Personalizar experiências educacionais.</li>
                      <li>Melhorar recursos e funcionalidades.</li>
                      <li>Prestar suporte aos usuários.</li>
                      <li>Garantir a segurança e prevenir usos indevidos.</li>
                      <li>Cumprir obrigações legais e regulatórias.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "2.4. Compartilhamento de informações",
                content: (
                  <>
                    <p>
                      As informações pessoais não deverão ser comercializadas.
                    </p>
                    <p>
                      O compartilhamento poderá ocorrer quando necessário para a
                      operação dos serviços, com fornecedores responsáveis por
                      hospedagem, infraestrutura ou funcionalidades da
                      plataforma, observadas as medidas de proteção e as bases
                      legais aplicáveis.
                    </p>
                    <p>
                      Também poderá ocorrer quando houver obrigação legal ou
                      determinação de autoridade competente.
                    </p>
                  </>
                ),
              },
              {
                title: "2.5. Armazenamento e retenção",
                content: (
                  <>
                    <p>
                      As informações deverão ser armazenadas em ambientes
                      apropriados, com medidas técnicas e administrativas
                      destinadas a evitar acessos não autorizados, perdas ou
                      alterações indevidas.
                    </p>
                    <p>
                      Os dados serão mantidos pelo período necessário para
                      cumprir as finalidades do tratamento ou atender às
                      obrigações legais aplicáveis.
                    </p>
                  </>
                ),
              },
            ]}
          />

          {/* 03 - Dados de crianças */}
          <PolicyCard
            id="dados"
            number="03 — ATENÇÃO ESPECIAL"
            title="Proteção de dados de crianças"
            description="A proteção dos pequenos é uma prioridade no desenvolvimento do Ilumine Educa."
            icon={<IconUsers size={26} />}
            className="border-primary/20 bg-primary-light/40"
            items={[
              {
                title: "3.1. Tratamento de dados de menores",
                content: (
                  <>
                    <p>
                      Considerando que a plataforma possui finalidade
                      educacional e pode ser utilizada por crianças, o
                      tratamento de dados pessoais de menores de idade deverá
                      respeitar seu melhor interesse.
                    </p>
                    <p>
                      Quando aplicável, serão observadas as exigências legais
                      relativas ao consentimento específico e em destaque de
                      pelo menos um dos pais ou responsável legal, conforme o
                      artigo 14 da LGPD.
                    </p>
                  </>
                ),
              },
              {
                title: "3.2. Responsabilidade dos responsáveis",
                content: (
                  <p>
                    Pais e responsáveis devem acompanhar a utilização da
                    plataforma e fornecer as autorizações necessárias para o
                    tratamento de dados, quando exigidas.
                  </p>
                ),
              },
              {
                title: "3.3. Minimização de informações",
                content: (
                  <p>
                    O desenvolvimento da plataforma deverá priorizar a coleta
                    mínima de informações necessárias para oferecer os recursos
                    educacionais, evitando a solicitação de dados
                    desnecessários.
                  </p>
                ),
              },
            ]}
          />

          {/* 04 - Proteção das informações */}
          <PolicyCard
            id="protecao"
            number="04 — SEGURANÇA"
            title="Proteção das informações"
            description="Medidas para preservar a integridade, a confidencialidade e a segurança dos dados."
            icon={<IconShieldCheck size={26} />}
            items={[
              {
                title: "4.1. Medidas de segurança",
                content: (
                  <p>
                    O Ilumine deverá adotar medidas técnicas e organizacionais
                    adequadas para proteger as informações contra acessos
                    indevidos, incidentes e situações acidentais ou ilícitas.
                  </p>
                ),
              },
              {
                title: "4.2. Serviços de terceiros",
                content: (
                  <>
                    <p>
                      A plataforma poderá utilizar serviços externos para
                      hospedagem, autenticação, armazenamento ou outras
                      funcionalidades.
                    </p>
                    <p>
                      Cada serviço utilizado deverá ser avaliado considerando
                      sua necessidade, segurança e condições de tratamento de
                      dados.
                    </p>
                  </>
                ),
              },
            ]}
          />

          {/* 05 - Direitos dos titulares */}
          <PolicyCard
            id="direitos"
            number="05 — DIREITOS DOS TITULARES"
            title="Seus direitos"
            description="A LGPD assegura direitos aos titulares de dados pessoais."
            icon={<IconHeartHandshake size={26} />}
            items={[
              {
                title: "5.1. Direitos garantidos",
                content: (
                  <>
                    <p>
                      Nos termos da legislação aplicável, o titular poderá
                      solicitar:
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>Confirmação da existência de tratamento.</li>
                      <li>Acesso aos dados pessoais.</li>
                      <li>
                        Correção de informações incompletas ou incorretas.
                      </li>
                      <li>
                        Anonimização, bloqueio ou eliminação, quando cabível.
                      </li>
                      <li>Portabilidade, observadas as condições legais.</li>
                      <li>Informações sobre compartilhamento de dados.</li>
                      <li>Revogação do consentimento, quando aplicável.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "5.2. Como exercer seus direitos?",
                content: (
                  <>
                    <p>
                      Para solicitar informações, esclarecimentos ou exercer
                      seus direitos relacionados aos dados pessoais, entre em
                      contato com a equipe do Ilumine.
                    </p>
                    <Link
                      href="/contato/"
                      className="mt-2 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      Entrar em contato
                      <IconArrowUpRight size={17} />
                    </Link>
                  </>
                ),
              },
              {
                title: "5.3. Atualizações desta política",
                content: (
                  <p>
                    Este documento poderá ser atualizado para refletir mudanças
                    na plataforma, em suas funcionalidades ou na legislação
                    aplicável. Recomendamos consultar esta página periodicamente
                    para acompanhar eventuais alterações.
                  </p>
                ),
              },
            ]}
          />
        </div>

        {/* CTA final */}
        <div className="mx-auto mt-12 max-w-4xl">
          <CallToAction
            title="Ficou com alguma dúvida?"
            description="Estamos à disposição para esclarecer questões relacionadas à
            plataforma, aos nossos serviços e à proteção de informações."
            primaryAction={{ label: "Entrar em contato", href: "/contato" }}
            size="compact"
            layout="horizontal"
          />
        </div>
      </div>
    </>
  );
}
