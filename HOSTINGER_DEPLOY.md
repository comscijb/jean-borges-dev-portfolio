# Deploy na Hostinger via GitHub

Este projeto e um frontend estatico Vite + React + TypeScript. Ele nao precisa de backend, Express, PM2, banco de dados ou servidor Node persistente para rodar em producao. A Hostinger deve executar o build e publicar o conteudo gerado em `dist`.

## Diagnostico do erro

Erro relatado:

```txt
Estrutura de projeto invalida ou framework nao compativel. Verificar arquivos e Frameworks compativeis.
```

Neste repositorio, os arquivos esperados estao na raiz:

- `package.json`
- `package-lock.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `src/`
- `public/`

Se a Hostinger continuar exibindo esse erro, confirme se o repositorio conectado no hPanel e exatamente este projeto na raiz. Se o projeto estiver dentro de uma subpasta em outro repositorio, a deteccao pode falhar.

## Pre-requisitos

- Plano Hostinger com suporte a Node.js Web App para build automatico via GitHub.
- Repositorio GitHub com este projeto Vite na raiz.
- `package.json` e `index.html` na raiz.
- Output directory configurado como `dist`.
- Node.js 20.x ou 22.x selecionado na Hostinger.

## Configuracao sugerida na Hostinger

- Tipo de app: Node.js Web App.
- Origem: Import Git repository.
- Framework: Vite ou React, se detectado.
- Se aparecer `Other`, configurar manualmente.
- Build command: `npm run build`.
- Output directory: `dist`.
- Entry file: deixar vazio para frontend estatico, se a Hostinger permitir.
- Node version: 20.x ou 22.x.

## Rotas internas

O projeto usa React Router. O arquivo `public/.htaccess` e copiado pelo Vite para `dist/.htaccess` durante o build e configura fallback para `index.html`.

Isso evita erro 404 ao atualizar rotas internas como:

- `/projetos/construiq-landing-page`
- `/projetos/clima-prime`

## Se o framework continuar invalido

Verifique:

- Se `package.json` esta na raiz do repositorio conectado.
- Se `index.html` esta na raiz.
- Se a integracao escolhida e Node.js Web App, nao apenas Git deploy comum de hospedagem PHP/HTML.
- Se o repositorio nao e monorepo ou nao contem o projeto em subpasta.
- Se o build local passa com `npm run build`.
- Se o output directory na Hostinger esta como `dist`.

Se ainda falhar, use um repositorio separado com o projeto na raiz.

## Deploy manual alternativo

Como alternativa, gere o build localmente:

```bash
npm install
npm run build
```

Depois envie o conteudo da pasta `dist` para `public_html` na Hostinger.

Nao envie a pasta `dist` como subpasta. Envie o conteudo dela.
