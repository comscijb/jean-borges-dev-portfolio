# Portfolio Jean Borges

Portfolio profissional desenvolvido com React, TypeScript, Vite e Chakra UI v3, focado em apresentar projetos, estudos de caso e servicos de desenvolvimento web.

## Tecnologias

- React
- TypeScript
- Vite
- Chakra UI v3
- React Router
- React Icons
- React Helmet Async

## Estrutura esperada

Para deploy direto do GitHub pela Hostinger, o projeto deve estar na raiz do repositorio:

- `package.json`
- `package-lock.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `src/`
- `public/`

Se esses arquivos estiverem dentro de uma subpasta em outro repositorio, a Hostinger pode exibir erro de estrutura invalida ou framework nao compativel.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
```

O build gera a pasta `dist`.

## Preview local

```bash
npm run preview
```

## Sitemap

O sitemap e gerado automaticamente antes do build:

```bash
npm run generate:sitemap
```

## Deploy na Hostinger via GitHub

- Use a opcao Node.js Web App no hPanel, quando disponivel.
- Conecte o repositorio GitHub.
- Garanta que o projeto esteja na raiz do repositorio.
- Use build command `npm run build`.
- Use output directory `dist`.
- Se o framework nao for detectado, selecione Vite, React ou Other e preencha manualmente.
- Para rotas internas, o arquivo `public/.htaccess` sera copiado para `dist/.htaccess`.

Configuracao sugerida:

```txt
Framework: Vite ou React
Build command: npm run build
Output directory: dist
Entry file: vazio para frontend estatico, se permitido
Node version: 20.x ou 22.x
```

Este repositorio e um frontend estatico. Ele nao precisa de servidor Node persistente em producao, apenas do build gerado em `dist`.

## Deploy manual alternativo

```bash
npm install
npm run build
```

Depois suba o conteudo da pasta `dist` para `public_html` na Hostinger.

## SEO e publicacao

- Atualizar o dominio real em `src/config/site.ts`.
- Conferir `public/robots.txt`.
- Conferir `public/sitemap.xml`.
- Conferir `public/og-image.png`.
- Enviar o sitemap no Google Search Console.
- Solicitar a inspecao da URL principal apos a publicacao.

## Observacao

Se a Hostinger acusar `Estrutura de projeto invalida ou framework nao compativel`, confirme primeiro se o deploy foi configurado como Node.js Web App com GitHub e se o repositorio conectado contem este projeto na raiz.
