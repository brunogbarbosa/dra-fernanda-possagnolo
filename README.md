# Dra. Fernanda Possagnolo

Site editorial em Next.js, React e TypeScript para a Dra. Fernanda Possagnolo, com identidade vinho, caramelo e marfim, retratos reais, galeria de registros clínicos, favicon e imagens Open Graph.

## Vercel

Importe este repositório na Vercel usando o preset **Next.js**. A raiz do repositório é a raiz do projeto. Instalação: `npm ci`. Build: `npm run build`. Não há variáveis obrigatórias. Para domínio próprio, atualize `seo.url` em `data/site.ts`.

## Desenvolvimento

Requer Node.js 20.9 ou superior. Execute `npm ci` e `npm run dev`.

## Conteúdo

Edite `data/site.ts` para atualizar textos, links e registros. O agendamento direciona ao Instagram oficial exibido no material de referência (`@dra.ferpossagnolo`), pois telefone e WhatsApp não foram fornecidos. Os registros clínicos são os arquivos originais recebidos e incluem ampliação e comparação.

O projeto preserva as fontes locais, as animações responsivas e o comportamento de `prefers-reduced-motion` do template premium-vendas. Os assets da Dra. Fernanda ficam em `public/images` e as imagens sociais em `app`.
