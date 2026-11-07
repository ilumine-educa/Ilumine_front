# Hero da Ilumine.Educa

## Como visualizar

Na pasta do projeto, execute `npm ci` na primeira instalação e depois `npm run dev`.
Abra o endereço informado no terminal, normalmente http://localhost:3000.
Para conferir a compilação de produção e os tipos, execute `npm run build`.
As fontes configuradas em `next/font/google` precisam de acesso à internet durante o build.

## Onde alterar cada coisa

- `src/app/page.tsx`: é a homepage. O elemento `main` recebe a Hero; futuras seções podem ser adicionadas depois dela.
- `src/components/home/Hero.tsx`: contém logo, título, descrição, botões, fotografia e detalhes decorativos. Edite os textos e as classes Tailwind diretamente aqui. Layout, cores, espaçamentos, tipografia, responsividade e estados dos botões usam Tailwind.
- `src/components/home/Hero.module.css`: mantém somente as formas orgânicas do fundo, a forma azul e o sublinhado decorativo. Seus pseudo-elementos e contornos ficam mais legíveis em CSS. O arquivo continua sendo utilizado pela Hero.
- `src/app/layout.tsx`: mantém as fontes Fredoka e Poppins e define o idioma `pt-BR`, o título da aba e a descrição do site.
- `public/images/hero/crianca-tablet.png`: fotografia gerada por IA, com fundo transparente, 1254 × 1254 pixels. Não representa uma pessoa ou cliente real.
- `public/images/hero/abelhinha.svg`: ilustração vetorial original. Pode ser aberta em um editor de SVG e ampliada sem perder nitidez.
- `next.config.ts`: mantém o loader Tailwind, sem `as: "*.css"`. Essa conversão fazia os CSS Modules perderem suas classes, inclusive os estilos das fontes.

## Decisões de implementação

A Hero é um único componente porque suas partes pertencem à mesma seção. Não há estado, hooks, bibliotecas adicionais ou `"use client"`.

Tailwind é a ferramenta principal de estilização da Hero. As classes começam pelo celular; as variantes `min-[761px]` e `min-[1001px]` preservam os tamanhos de transição do layout anterior. Valores específicos mantêm as cores e proporções da identidade visual, sem configuração adicional. No título, `font-semibold!` prevalece sobre a regra global de peso dos títulos, sem alterar o CSS global. O CSS Module fica reservado aos efeitos decorativos mais complexos.

O `next/image` otimiza a foto para diferentes telas. `width` e `height` reservam seu espaço e `sizes` informa o tamanho aproximado de exibição. A foto principal tem carregamento imediato e prioridade alta.

O título usa um único `h1`. A seção é identificada por esse título. A foto tem descrição alternativa; a abelha e os demais enfeites são decorativos e não interrompem a leitura por tecnologias assistivas. Os botões têm foco visível e altura mínima de 56 pixels.

Os botões são apenas visuais nesta etapa, conforme combinado. Quando os destinos existirem, substitua-os por `Link` do Next.js com o `href` real, mantendo as classes. Não use `href="#"` como destino provisório.

Até 760 pixels, texto e imagem ficam em uma coluna. Os botões quebram de linha quando necessário. Não há animações contínuas e as transições respeitam a preferência por movimento reduzido.

## Origem da imagem

A foto foi criada com a ferramenta integrada de geração de imagens, sem API ou CLI externa. O logo utilizado já existia em `src/assets/logo-horizontal.png`. Nenhuma imagem adicional está pendente.

Prompt utilizado na geração da foto:

> Use case: photorealistic-natural. Asset type: transparent cutout photograph for the right-hand side of the Ilumine.Educa educational homepage hero. Generate one original fictional child, a cheerful approximately 7-year-old boy with medium warm brown skin, natural short dark brown curly hair, wearing a simple cobalt blue short sleeve t-shirt. He is seated, looking down with a natural delighted smile at a landscape-oriented dark navy tablet he is holding with both hands. Camera at eye level, framing from above hair to below forearms, all hair, arms, hands and tablet entirely within frame, subject centered, generous clear space around edges. Tablet angled so only its back is seen, no visible branding. Soft natural studio light, realistic skin and hair detail, welcoming authentic educational editorial photography, anatomically correct hands. Background fully transparent with clean hair edges, no floor, no desk, no scenery, no typography, no logos, no illustration, no bee, no graphic shapes. Child and tablet only. Square composition suitable for placing over a pale blue organic shape in a responsive website.
