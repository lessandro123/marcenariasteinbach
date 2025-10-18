# PRD - Site Marcenaria Steinbach
## Product Requirements Document

### 1. VISÃO GERAL DO PROJETO

**Nome do Projeto:** Site Institucional Marcenaria Steinbach  
**Versão:** 1.0  
**Data:** 2024  
**Tecnologia Principal:** Next.js 14+ (App Router)  

#### 1.1 Objetivo
Desenvolver um site institucional moderno, otimizado para SEO e performance, para a Marcenaria Steinbach - empresa familiar com 71 anos de história especializada em móveis planejados de luxo.

#### 1.2 Escopo
- Site institucional responsivo
- Sistema de gerenciamento de conteúdo para blog futuro
- Otimização extrema para SEO
- Performance superior (Core Web Vitals)
- Estrutura escalável para expansões futuras

---

### 2. ANÁLISE DO DESIGN ATUAL

#### 2.1 Brand Guidelines (Extraído do HTML)

**Cores Principais:**
- Vermelho Principal: `#DC2626` (red-600)
- Vermelho Hover: `#B91C1C` (red-700)
- Dourado/Gold: `#D4AF37` (#d4af37)
- Dourado Gradiente: `linear-gradient(135deg, #d4af37 0%, #f4e99b 100%)`
- Madeira: `linear-gradient(135deg, #8B4513 0%, #A0522D 100%)`

**Tipografia:**
- Primária (Títulos): `'Playfair Display', serif` (400, 500, 600, 700)
- Secundária (Corpo): `'Inter', sans-serif` (300, 400, 500, 600)

**Paleta de Cores Complementares:**
- Cinza Principal: `#1F2937` (gray-800)
- Cinza Secundário: `#6B7280` (gray-600)
- Backgrounds: `#F9FAFB` (gray-50), `#F3F4F6` (gray-100)
- Branco: `#FFFFFF`

#### 2.2 Componentes de Design

**Spacing System:**
- Section Padding: `80px 0` (section-padding)
- Clean Spacing: `3rem` margin-bottom
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

**Shadows:**
- Modern Shadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
- Card Hover: `0 25px 50px -12px rgba(0, 0, 0, 0.15)`

**Animations:**
- Card Hover: `transform: translateY(-8px)` com `transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Reveal on Scroll: `opacity: 0` → `opacity: 1` + `translateY(30px)` → `translateY(0)`

---

### 3. ARQUITETURA TÉCNICA

#### 3.1 Stack Tecnológico

**Frontend:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- React Hook Form (formulários)

**SEO & Performance:**
- Next.js Image Optimization
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Schema.org markup
- Open Graph meta tags

**CMS (Futuro):**
- Sanity.io ou Strapi (para blog e gestão de conteúdo)
- Markdown/MDX para posts

**Analytics & Monitoring:**
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring
- Error tracking (Sentry)

#### 3.2 Estrutura de Pastas Next.js

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── sobre/
│   │   └── page.tsx
│   ├── projetos/
│   │   ├── page.tsx
│   │   └── [categoria]/
│   │       └── page.tsx
│   ├── contato/
│   │   └── page.tsx
│   └── blog/ (futuro)
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Contact.tsx
│   │   └── AmbientesSlider.tsx
│   └── common/
│       ├── RevealOnScroll.tsx
│       ├── ParallaxSection.tsx
│       └── ImageSlider.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   ├── validations.ts
│   └── types.ts
├── styles/
│   └── globals.css
└── public/
    ├── images/
    ├── icons/
    └── logos/
```

---

### 4. PÁGINAS E FUNCIONALIDADES

#### 4.1 Página Inicial (Landing Page)

**Estrutura Otimizada Inspirada no Design Honda:**

1. **Navigation Bar** (Clean & Minimal)
   - Logo centralizado
   - Botão "Orçamento Grátis" destacado (esquerda)
   - Menu horizontal limpo (direita)
   - Mobile hamburger menu

2. **Hero Section** (Impactante)
   - Background premium com overlay sutil
   - Título principal: "STEINBACH Marcenaria"
   - Subtitle: "Confiança e Credibilidade"
   - Descrição concisa: "71 anos criando móveis únicos"
   - 2 CTAs estratégicos com hierarquia visual clara
   - Scroll indicator minimalista

3. **Ambientes Showcase** (Estilo Honda Models)
   - Carrossel premium com transições suaves
   - Cards grandes para cada ambiente principal:
     - **Cozinhas** (126 projetos)
     - **Dormitórios** (20 projetos) 
     - **Closets** (30 projetos)
     - **Home Office** (48 projetos)
     - **Salas de Jantar** (14 projetos)
     - **Áreas de Serviço** (84 projetos)
     - **Banheiros** (32 projetos)
     - **Home Theater** (28 projetos)
   - Hover effects elegantes
   - CTA "Explorar Categoria" em cada card

4. **Stats Section** (Credibilidade)
   - Layout grid limpo com espaçamento generoso
   - 4 métricas principais com animação de contagem:
     - **71** anos de história
     - **99%** clientes satisfeitos  
     - **+650** projetos entregues
     - **100%** confiança na entrega
   - Ícones minimalistas

5. **Featured Projects** (Destaques)
   - Seleção de 3-4 projetos premium
   - Layout inspirado em showcase de produtos Honda
   - Imagens grandes e de alta qualidade
   - Descrições concisas e técnicas
   - Botão "Ver Projeto Completo"

6. **About Section** (Nossa História)
   - Layout two-column limpo
   - Imagem do fundador Germano José Steinbach
   - Timeline visual de 1954 até hoje
   - Lista de diferenciais organizada
   - CTA "Conheça Nossa Trajetória"

7. **Process Section** (Como Trabalhamos)
   - 3 etapas claras estilo Honda:
     - **01. Projeto 3D** - Visualização realística
     - **02. Fabricação** - Produção artesanal
     - **03. Instalação** - Montagem profissional
   - Ícones modernos e descritivos

8. **Sustainability** (FSC Certification)
   - Banner dedicado à sustentabilidade
   - Certificação FSC em destaque
   - Compromisso ambiental da marca

9. **Contact CTA** (Transforme Seu Espaço)
   - Seção impactante com call-to-action
   - Botões de contato hierarquizados
   - Informações de contato organizadas

10. **Footer** (Institucional)
    - Layout grid organizado
    - Links categorizados por seção
    - Informações de contato centralizadas
    - Social proof e certificações

#### 4.2 Sistema de Galerias Organizadas (Estilo Honda)

**Estrutura de Ambientes Baseada no Site Atual:**

1. **Página Ambientes** (`/ambientes`)
   - **Layout Grid Responsivo** (estilo showcase Honda)
   - **8 Categorias Principais:**
     - **Cozinhas** (126 projetos) - Destaque principal
     - **Áreas de Serviço** (84 projetos) - Funcionalidade
     - **Home Office** (48 projetos) - Tendência crescente  
     - **Banheiros** (32 projetos) - Elegância
     - **Closets** (30 projetos) - Luxo
     - **Home Theater** (28 projetos) - Entretenimento
     - **Dormitórios** (20 projetos) - Conforto
     - **Salas de Jantar** (14 projetos) - Convivência

2. **Páginas Individuais por Ambiente** (`/ambientes/[categoria]`)
   - **Grid de Projetos** com filtros inteligentes
   - **Visualização em mosaico** otimizada
   - **Modal de ampliação** com galeria completa
   - **Informações técnicas** de cada projeto
   - **CTA "Solicitar Orçamento"** específico

3. **Sistema de Filtros Avançados:**
   - Por **estilo** (moderno, clássico, minimalista)
   - Por **cor predominante** 
   - Por **tamanho do ambiente**
   - Por **faixa de investimento**

#### 4.3 Páginas Institucionais

1. **Sobre Nós** (`/sobre`)
   - História da família Steinbach desde 1954
   - Timeline interativa de 71 anos
   - Valores e missão da empresa
   - Equipe e especialidades

2. **Processo de Trabalho** (`/processo`)
   - **3 Etapas Detalhadas:**
     - Consultoria e Projeto 3D
     - Fabricação Artesanal
     - Instalação Profissional
   - Timeline do projeto
   - Garantias oferecidas

3. **Sustentabilidade** (`/sustentabilidade`)
   - Certificação FSC em destaque
   - Processos ecológicos
   - Responsabilidade ambiental

4. **Contato** (`/contato`)
   - Formulário otimizado
   - Múltiplos canais de contato
   - Mapa interativo da loja
   - Horários de funcionamento

5. **Blog** (`/blog` - expansão futura)
   - Tendências em marcenaria
   - Dicas de organização
   - Cases de sucesso
   - Cuidados com móveis planejados

---

### 5. REQUISITOS DE PERFORMANCE

#### 5.1 Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **PageSpeed Score:** > 90 (mobile e desktop)

#### 5.2 Otimizações Técnicas

**Sistema de Imagens Otimizado:**
- **Next.js Image Component** com lazy loading inteligente
- **Formatos Modernos:** WebP (fallback JPEG) e AVIF para navegadores compatíveis
- **Responsive Images:** múltiplos breakpoints (320px, 768px, 1024px, 1920px)
- **Placeholder Blur-up** effect para carregamento progressivo
- **Compressão Automática:** redução de 60-80% no tamanho dos arquivos
- **CDN Integration:** distribuição global para performance máxima

**Organização de Imagens por Categoria:**
```
public/images/
├── ambientes/
│   ├── cozinhas/          # 126 projetos organizados
│   ├── dormitorios/       # 20 projetos
│   ├── closets/           # 30 projetos  
│   ├── home-office/       # 48 projetos
│   ├── salas-jantar/      # 14 projetos
│   ├── areas-servico/     # 84 projetos
│   ├── banheiros/         # 32 projetos
│   └── home-theater/      # 28 projetos
├── hero/                  # Imagens principais
├── institucional/         # Sobre a empresa
├── processo/              # Etapas de trabalho
└── certificacoes/         # FSC e outras
```

**Padrão de Nomenclatura:**
- `ambiente-categoria-id-descrição.webp`
- Exemplo: `cozinha-moderna-001-branca-ilha.webp`

**JavaScript:**
- Code splitting automático do Next.js
- Dynamic imports para componentes não críticos
- Bundle analysis e otimização

**CSS:**
- Tailwind CSS com purging
- Critical CSS inline
- CSS-in-JS otimizado

**Fonts:**
- Google Fonts otimizado com `font-display: swap`
- Preload de fonts críticas
- Fallback fonts definidos

---

### 6. UI/UX DESIGN SYSTEM (Inspirado Honda)

#### 6.1 Princípios de Design

**Clean & Minimal:**
- **Espaçamento Generoso:** 120px entre seções principais
- **Grid System:** 12 colunas responsivas
- **Tipografia Hierárquica:** 6 níveis de heading bem definidos
- **Cores Limitadas:** paleta restrita para elegância

**Navegação Intuitiva:**
- **Breadcrumbs Visuais** em todas as páginas internas
- **Menu Sticky** com comportamento suave
- **Search Functionality** com filtros inteligentes
- **Mobile-First Navigation** com gestos naturais

#### 6.2 Componentes Reutilizáveis

**Cards de Ambiente (Estilo Honda Models):**
```tsx
interface AmbienteCard {
  categoria: string;
  totalProjetos: number;
  imagemDestaque: string;
  descricao: string;
  linkCategoria: string;
}
```

**Hero Sections Modulares:**
- **Full-screen Heroes** para páginas principais
- **Compact Heroes** para páginas internas
- **Overlay dinâmico** baseado na imagem de fundo

**Gallery Components:**
- **Grid Responsivo** (1-2-3-4 colunas)
- **Lightbox Modal** com navegação por teclado
- **Infinite Scroll** com lazy loading
- **Filtros Avançados** com animações suaves

#### 6.3 Micro-interações

**Hover States:**
- **Card Lift Effect:** elevação de 8px com shadow
- **Image Zoom:** scale 1.05 em 400ms
- **Button Animations:** ripple effect sutil
- **Loading States:** skeletons elegantes

**Scroll Animations:**
- **Reveal on Scroll:** elementos aparecem progressivamente
- **Parallax Sutil:** movimentação suave de backgrounds
- **Progress Indicators:** barras de progresso em formulários
- **Sticky Elements:** comportamento natural

---

### 7. REQUISITOS DE SEO

#### 7.1 On-Page SEO

**Meta Tags:**
```html
<title>Marcenaria Steinbach - Móveis Planejados de Luxo | 71 Anos de História</title>
<meta name="description" content="Móveis planejados de luxo com 71 anos de tradição. Cozinhas, closets, dormitórios e home office sob medida. Atendimento em Palhoça/SC. Orçamento grátis!" />
<meta name="keywords" content="móveis planejados, marcenaria, cozinha sob medida, closet, Palhoça SC, móveis luxo" />
```

**Schema.org:**
- LocalBusiness markup
- Organization markup
- Review/Rating markup
- Product markup (para projetos)

**URLs:**
- URLs semânticas e amigáveis
- Breadcrumbs estruturados
- XML Sitemap automático

#### 7.2 Palavras-chave Alvo

**Primárias:**
- móveis planejados Palhoça
- marcenaria Palhoça SC
- cozinha sob medida Florianópolis
- closet planejado Grande Florianópolis

**Secundárias:**
- móveis de luxo SC
- marcenaria familiar
- projeto 3D móveis
- móveis sustentáveis FSC

---

### 8. REQUISITOS DE ACESSIBILIDADE

#### 8.1 WCAG 2.1 AA Compliance
- Contraste de cores adequado
- Navegação por teclado
- Screen reader compatibility
- Alt tags descritivas
- ARIA labels apropriados

#### 8.2 Funcionalidades Inclusivas
- Tamanhos de fonte escaláveis
- Foco visível nos elementos interativos
- Animações respeitando `prefers-reduced-motion`
- Conteúdo acessível em dispositivos móveis

---

### 9. INTEGRAÇÕES FUTURAS

#### 9.1 CRM/Marketing
- Integração com formulários de contato
- Google Analytics 4
- Facebook Pixel
- WhatsApp Business API

#### 9.2 E-commerce (Expansão Futura)
- Catálogo de produtos
- Sistema de orçamentos online
- Galeria de projetos com filtros avançados

---

### 10. CRONOGRAMA DE DESENVOLVIMENTO

#### Fase 1 - Setup e Estrutura (Semana 1-2)
- [ ] Configuração Next.js + TypeScript
- [ ] Setup Tailwind CSS
- [ ] Estrutura de componentes base
- [ ] Configuração de SEO

#### Fase 2 - Desenvolvimento Core (Semana 3-5)
- [ ] Header e Navigation
- [ ] Hero Section
- [ ] Seções principais da homepage
- [ ] Footer
- [ ] Responsividade

#### Fase 3 - Funcionalidades Avançadas (Semana 6-7)
- [ ] Animações e interações
- [ ] Formulário de contato
- [ ] Otimizações de performance
- [ ] Testes de acessibilidade

#### Fase 4 - SEO e Deploy (Semana 8)
- [ ] Otimização completa de SEO
- [ ] Schema markup
- [ ] Performance audit
- [ ] Deploy e configuração de domínio

---

### 11. CRITÉRIOS DE ACEITAÇÃO

#### 11.1 Performance
- [ ] PageSpeed Score > 90 (mobile/desktop)
- [ ] Core Web Vitals todos em verde
- [ ] Tempo de carregamento < 3s

#### 11.2 SEO
- [ ] Meta tags completas
- [ ] Schema.org implementado
- [ ] Sitemap XML gerado
- [ ] URLs otimizadas

#### 11.3 Funcionalidade
- [ ] Todas as seções do design implementadas
- [ ] Formulário de contato funcional
- [ ] Navegação suave entre seções
- [ ] Responsividade perfeita

#### 11.4 Acessibilidade
- [ ] WCAG 2.1 AA compliance
- [ ] Navegação por teclado
- [ ] Screen reader compatibility

---

### 12. TECNOLOGIAS E DEPENDÊNCIAS

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "zod": "^3.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "prettier": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

---

### 13. OBSERVAÇÕES FINAIS

Este PRD serve como documento guia para o desenvolvimento do site da Marcenaria Steinbach. O foco principal está em:

1. **Fidelidade ao design atual** - manter todas as cores, tipografia e layout conforme especificado no HTML
2. **Performance extrema** - otimização para Core Web Vitals e velocidade de carregamento
3. **SEO otimizado** - estrutura preparada para máxima visibilidade nos motores de busca
4. **Escalabilidade** - arquitetura que permite expansões futuras (blog, e-commerce)
5. **Manutenibilidade** - código limpo e bem estruturado para facilitar atualizações

O projeto deve ser desenvolvido com foco na experiência do usuário, mantendo a elegância e sofisticação da marca Steinbach enquanto garante excelente performance técnica.
