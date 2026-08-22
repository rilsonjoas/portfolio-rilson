# Roadmap — Portfólio & Narniano

**Status (2026-08-22):** No ar em [portfolio-rilson.vercel.app](https://portfolio-rilson.vercel.app).

---

## Roadmap de Engenharia

Segue o padrão comum documentado em `hetzner-infra/PADRAO-DE-ENGENHARIA.md`,
com o peso proporcional ao que este projeto é: site estático de
portfólio, sem backend próprio, sem dado de usuário, sem banco — a
maior parte do checklist é naturalmente N/A ou baixa prioridade aqui,
diferente dos projetos com dado real de terceiros.

- N/A — **P0 Segurança**: sem input de usuário, sem auth, sem dado
  sensível. Zero segredo no histórico (`gitleaks`, checado 2026-08-22)
- [x] **P1 Infra & Deploy**: Vercel, confirmado no ar
- N/A — **P2 Saúde & Resiliência**: sem processo de longa duração, sem
  dependência externa em runtime (site estático)
- [ ] **P3 CI/CD**: nenhum workflow configurado — sem lint/build
  automático antes de mergear
- [ ] **P4 Testes**: zero testes automatizados
- N/A — **P5/P6**: sem log de servidor próprio, sem dado pra fazer
  backup
- [ ] **P7 UI/UX, acessibilidade e SEO**: 3 issues abertas no GitHub
  (rich snippets, animação de scroll, otimização de imagem) — nenhuma
  crítica, todas polimento
- [x] **P9 Documentação**: este arquivo, criado agora

## Backlog de Produto — Issues e Bugs (levantamento 2026-08-21)

### 🎨 Portfólio
- [ ] **Atualizar projetos recentes** — adicionar Lecionário, Cuidia
      (ex-Meus Remédios), Teste Político e A Bancada Evangélica com
      descrições técnicas de peso (offline-first, Laravel+Postgres,
      211 testes, Docker/VPS).
- [ ] **Alinhar com o Design Narniano** — aplicar tipografia, paleta e
      elementos visuais do guia de design para dar identidade única e
      esteticamente premium.

### 🌐 Narniano / A Biblioteca
- [ ] **Links para A Biblioteca** — adicionar seção/links claros
      apontando para os projetos da Biblioteca (Lecionário, Bíblia na
      Arte, Scriptorium Divinum, Gerador C.S. Lewis).
