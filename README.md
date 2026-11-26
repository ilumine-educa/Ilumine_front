## Demonstração local da Ilumine.Educa

Execute `npm run demo`, abra [a tela de login](http://127.0.0.1:3000/auth/login) e selecione **Entrar na demonstração local**. Se a porta estiver ocupada, use a indicada no terminal. A demonstração também funciona com `npm run dev`. Ambos iniciam o servidor na interface de loopback.

A família e a criança exibidas são fictícias. Os formulários permitem explorar os campos. Os jogos aceitam respostas, e a primeira fase de cada disciplina pode ser concluída. Perfis, configurações e progresso não são gravados. Em produção, o login de demonstração fica indisponível e as rotas privadas redirecionam para o login.

### Integração pendente

Substitua a leitura da família de exemplo por dados autorizados da API. Conecte o login, o logout, a recuperação de conta, a criação e edição de crianças, as preferências, o histórico de atividades e o progresso por criança e disciplina. As decisões de autorização e conclusão persistida pertencem ao back-end.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
